import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Question} from '../../shared/models/question';
import {SchoolService} from '../../core/services/school.service';
import {QuestionFilter} from '../../shared/models/questionFilter';
import {MatDialog, MatDialogConfig, MatMenuTrigger, PageEvent} from '@angular/material';
import {ConfirmationModalComponent} from '../../shared/modal/confirmation-modal/confirmation-modat.component';
import {ToastrService} from 'ngx-toastr';
import {QuestionViewModalComponent} from './question-view-modal/question-view-modal.component';
import {AddQuestionModalComponent} from './add-question-modal/add-question-modal.component';
import {QuestionService} from '../../core/services/question.service';
import {CourseService} from '../../core/services/course.service';
import {Course} from '../../shared/models/course';
import {Topic} from '../../shared/models/topic';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss']
})
export class QuestionListComponent implements OnInit {

  filter = new FormGroup({
    questionName: new FormControl('', {
      validators: []
    }),
    questionDifficulty: new FormControl('', {
      validators: []
    }),
    school: new FormControl('', {
      validators: []
    }),
    chapter: new FormControl('', {
      validators: []
    }),
    course: new FormControl('', {
      validators: []
    }),
    questionNumber: new FormControl('', {
      validators: []
    }),
    book: new FormControl('', {
      validators: []
    }),
    verified: new FormControl(true, {
      validators: []
    })
  });

  questionDifficultyList = ['HARD', 'EASY', 'MEDIUM'];
  schools: any;
  topics: Topic[] = [];
  courses: Course[] = [];
  displayedColumns: string[] = ['questionNumber', 'name', 'questionDifficulty', 'book', 'course', 'chapter',
    'school', 'externalId', 'verified'];
  dataSource = [];
  page = {
    pageSize: 10,
    pageIndex: 1,
    length: 0
  };

  @ViewChild(MatMenuTrigger, {static: false})
  contextMenu: MatMenuTrigger;
  contextMenuPosition = {x: '0px', y: '0px'};

  constructor(private schoolService: SchoolService,
              public matDialog: MatDialog,
              private toastr: ToastrService,
              private questionService: QuestionService,
              private courseService: CourseService) {
  }

  ngOnInit() {
    this.schoolService.getAllSchools().subscribe(
      (data) => {
        this.schools = data;
      }
    );

    this.courseService.getAllCourse().subscribe(
      (data) => {
        this.courses = data;
      }
    );

    this.getData({pageSize: 10, pageNumber: 0, verified: true});
    this.onChanges();
  }

  onChanges(): void {
    this.course.valueChanges.subscribe(val => {
      this.initChapters(val);
    });
  }

  onContextMenu(event: MouseEvent, value: any) {
    event.preventDefault();
    this.contextMenuPosition.x = event.clientX + 'px';
    this.contextMenuPosition.y = event.clientY + 'px';
    this.contextMenu.menuData = {item: value};
    this.contextMenu.menu.focusFirstItem('mouse');
    this.contextMenu.openMenu();
  }

  private getData(filter: QuestionFilter) {
    this.questionService.filterQuestion(filter).subscribe(
      (data: any) => {
        this.dataSource = data.content;
        this.page.length = data.totalElements;
        this.page.pageSize = data.size;
        this.page.pageIndex = data.number;
      }
    );
  }

  get school() {
    return this.filter.get('school');
  }

  get chapter() {
    return this.filter.get('chapter');
  }

  get course() {
    return this.filter.get('course');
  }

  get questionName() {
    return this.filter.get('questionName');
  }

  get questionDifficulty() {
    return this.filter.get('questionDifficulty');
  }

  get book() {
    return this.filter.get('book');
  }

  get questionNumber() {
    return this.filter.get('questionNumber');
  }

  get verified() {
    return this.filter.get('verified');
  }

  applyFilter(pageNumber = 0, pageSize = 10) {
    const filter: QuestionFilter = new QuestionFilter();
    if (this.questionName.touched && this.questionName.dirty) {
      filter.name = this.questionName.value;
    }
    if (this.questionNumber.touched && this.questionNumber.dirty) {
      filter.questionNumber = this.questionNumber.value;
    }
    if (this.questionDifficulty.touched && this.questionDifficulty.dirty) {
      filter.questionDifficulty = this.questionDifficulty.value;
    }
    if (this.verified.touched && this.verified.dirty) {
      filter.verified = this.verified.value;
    }
    if (this.book.touched && this.book.dirty) {
      filter.book = this.book.value;
    }

    if (this.chapter.touched && this.chapter.dirty) {
      filter.chapterExternalId = this.getChapter();
    }

    if (this.course.touched && this.course.dirty) {
      filter.courseExternalId = this.getCourse();
    }

    filter.pageNumber = pageNumber;
    filter.pageSize = pageSize;

    this.getData(filter);
  }

  resetFilter() {
    this.filter.reset();
    this.applyFilter();
  }

  private getChapter() {
    let externalId = '';
    this.topics.forEach(chapter => {
      if (this.chapter.value === chapter.name) {
        externalId = chapter.externalId;
      }
    });
    return externalId;
  }

  openDeleteQuestionModal(question: Question) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.id = 'confirmation-modal';
    dialogConfig.height = '300px';
    dialogConfig.width = '500px';

    dialogConfig.data = {
      name: 'deleteQuestion',
      title: 'Sunteti sigur ca doriti sa stergeti acest intrebare?',
      description: 'Daca veti continua intrebarea: ' + question.name + ' va fi sters.',
      actionButtonText: 'Sterge',
      topicId: question.externalId
    };

    const modalDialog = this.matDialog.open(ConfirmationModalComponent, dialogConfig);
    modalDialog.afterClosed().subscribe(result => {
      if (result) {
        this.questionService.deleteQuestion(question.externalId).subscribe(
          data => {
            this.toastr.success('Intrebarea a fost stersa cu succes');
            this.applyFilter();
          },
          error => {
            this.toastr.error('A aparut o eroare');
          });
      }
    });
  }

  openCreateQuestionModel() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.id = 'add-question-modal';
    dialogConfig.height = '80%';
    dialogConfig.width = '90%';
    dialogConfig.data = {
      schools: this.schools,
      courses: this.courses
    };

    const modalDialog = this.matDialog.open(AddQuestionModalComponent, dialogConfig);
    modalDialog.afterClosed().subscribe(result => {
      if (result) {
        this.applyFilter();
      }
    });
  }

  openUpdateQuestionModel(question: Question) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.id = 'add-question-modal';
    dialogConfig.height = '80%';
    dialogConfig.width = '90%';
    dialogConfig.data = {
      schools: this.schools,
      courses: this.courses,
      question
    };

    const modalDialog = this.matDialog.open(AddQuestionModalComponent, dialogConfig);
    modalDialog.afterClosed().subscribe(result => {
      if (result) {
        this.applyFilter();
      }
    });
  }

  openViewQuestionModel(question: Question) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.id = 'view-question-modal';
    dialogConfig.height = '80%';
    dialogConfig.width = '80%';
    dialogConfig.data = question;

    this.matDialog.open(QuestionViewModalComponent, dialogConfig);
  }

  private getCourse() {
    let externalId = '';
    this.courses.forEach(course => {
      if (this.course.value === course.name) {
        externalId = course.externalId;
      }
    });
    return externalId;
  }

  getCourseName(externalId: string) {
    if (externalId === '' || externalId === undefined) {
      return '';
    }

    let name = externalId;
    this.courses.forEach(course => {
      if (externalId === course.externalId) {
        name = course.name;
      }
    });
    return name;
  }

  private initChapters(nameCourse: string) {
    let chapters = [];
    this.courses.forEach(course => {
      if (nameCourse === course.name) {
        chapters = course.topics;
      }
    });
    this.topics = chapters;
  }

  changePage($event: PageEvent) {
    this.applyFilter($event.pageIndex, $event.pageSize);
  }
}

