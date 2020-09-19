import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CourseService} from '../../../core/services/course.service';
import {Course} from '../../../shared/models/course';
import {Topic} from '../../../shared/models/topic';
import {Question} from '../../../shared/models/question';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';
import {QuestionService} from '../../../core/services/question.service';
import {QuizService} from '../../../core/services/quiz.service';
import {Quiz} from '../../../shared/models/quiz';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';

@Component({
  selector: 'app-quiz-create',
  templateUrl: './quiz-create.component.html',
  styleUrls: ['./quiz-create.component.scss']
})
export class QuizCreateComponent implements OnInit {

  quizForm = new FormGroup({
    courseName: new FormControl('', {
      validators: [Validators.required]
    }),
    topicName: new FormControl('', {
      validators: [Validators.required]
    }),
    enable: new FormControl('', {
      validators: []
    }),
    description: new FormControl('', {
      validators: [Validators.required]
    })
  });

  courses: Course[] = [];
  topics: Topic[] = [];
  selectableQuestions: any = [];
  courseExternalId: string;
  topicExternalId: string;
  displayedColumns = ['select', 'questionNumber', 'name', 'externalId'];
  page = {
    pageSize: 10,
    pageIndex: 1,
    length: 0
  };

  dataSource = new MatTableDataSource<Question>(this.selectableQuestions);
  selection = new SelectionModel<Question>(true, []);

  @ViewChild('paginator', {static: false}) paginator: MatPaginator;

  constructor(private courseService: CourseService,
              private questionService: QuestionService,
              private quizService: QuizService,
              private toastrService: ToastrService,
              private router: Router) {
    courseService.getAllActiveCourses().subscribe(
      data => {
        this.courses = data;
      }
    );
  }

  ngOnInit() {
    this.onChanges();
  }

  saveQuiz() {

    if (!this.quizForm.valid) {
      return;
    }

    const quiz: Quiz = new Quiz();
    quiz.courseExternalId = this.courseExternalId;
    quiz.chapterExternalId = this.topicExternalId;
    quiz.description = this.description.value;
    quiz.enable = this.enable.value;
    quiz.type = 'CHAPTER';

    quiz.questionIds = [];

    this.selection.selected.forEach((question) => {
      quiz.questionIds.push(question.externalId);
    });

    this.quizService.createQuiz(quiz).subscribe(
      () => {
        this.toastrService.success('Quiz creat.');
        if (quiz.enable) {
          const url = '/course/details/' + quiz.courseExternalId;
          this.router.navigate([url]);
        } else {
          this.router.navigate(['/']);
        }
      },
      (error) => this.toastrService.error('A aparut o eroare.'));
  }


  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  onChanges(): void {
    this.courseName.valueChanges.subscribe(val => {
      this.initChapters(val);
    });

    this.topicName.valueChanges.subscribe(val => {
      this.initQuestion(val);
    });
  }

  private initQuestion(val: any) {
    let topicExternalId;
    this.topics.forEach(item => {
      if (item.name === val) {
        topicExternalId = item.externalId;
      }
    });

    if (topicExternalId === undefined || topicExternalId === '') {
      this.topicExternalId = '';
    } else {
      this.topicExternalId = topicExternalId;
      this.getQuestions();
    }
  }

  private getQuestions(pageSize = 10, pageNumber = 0) {
    if (this.courseExternalId === undefined
      || this.courseExternalId === ''
      || this.topicExternalId === undefined
      || this.topicExternalId === '') {
      return;
    }

    this.questionService.filterQuestion({
      pageSize,
      pageNumber,
      courseExternalId: this.courseExternalId,
      chapterExternalId: this.topicExternalId,
      verified: true
    }).subscribe(
      (data: any) => {
        this.dataSource = new MatTableDataSource<Question>(data.content);
        this.page.length = data.totalElements;
        this.page.pageSize = data.size;
        this.page.pageIndex = data.number;
      }
    );
  }

  private initChapters(nameCourse: string) {
    let chapters = [];
    this.courses.forEach(course => {
      if (nameCourse === course.name) {
        chapters = course.topics;
        this.courseExternalId = course.externalId;
      }
    });

    this.topics = chapters;
  }

  changePage($event: any) {
    this.getQuestions($event.pageIndex, $event.pageSize);
  }

  get courseName() {
    return this.quizForm.get('courseName');
  }

  get topicName() {
    return this.quizForm.get('topicName');
  }

  get description() {
    return this.quizForm.get('description');
  }

  get enable() {
    return this.quizForm.get('enable');
  }
}
