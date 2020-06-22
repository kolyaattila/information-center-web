import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Question} from '../../../shared/models/question';
import {QuestionViewModalComponent} from '../question-view-modal/question-view-modal.component';
import {Answer} from '../../../shared/models/answer';
import {AnswersComponent} from '../answers/answers.component';
import {QuestionService} from '../../../core/services/question.service';
import {ToastrService} from 'ngx-toastr';
import {Course} from '../../../shared/models/course';
import {CourseService} from '../../../core/services/course.service';

@Component({
  selector: 'app-add-question-modal',
  templateUrl: './add-question-modal.component.html',
  styleUrls: ['./add-question-modal.component.scss']
})
export class AddQuestionModalComponent implements OnInit {
  creatQuestion = new FormGroup({
    questionName: new FormControl('', {
      validators: [Validators.required]
    }),
    questionDifficulty: new FormControl('', {
      validators: [Validators.required]
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
    verified: new FormControl(false, {
      validators: []
    })
  });
  questionDifficultyList = ['HARD', 'EASY', 'MEDIUM'];
  error = '';
  topics = [];
  courses: Course[] = [];
  answers: Answer[] = [];
  private updateQuestion = false;
  private questionExternalId: any;

  constructor(public dialogRef: MatDialogRef<AddQuestionModalComponent>,
              @Inject(MAT_DIALOG_DATA) private modalData: any,
              public matDialog: MatDialog,
              private questionService: QuestionService,
              private toastr: ToastrService,
              private courseService: CourseService) {

    this.courseService.getAllCourse().subscribe(
      data => this.courses = data
    );

    if (modalData.question) {
      this.updateQuestion = true;
      this.questionExternalId = modalData.question.externalId;
      this.initFormForUpdate(modalData.question);
      this.answers = modalData.question.answers;
    }
  }

  ngOnInit() {
    this.onChanges();
  }

  onChanges(): void {
    this.course.valueChanges.subscribe(val => {
      this.initChapters(val);
    });
  }

  get data() {
    return this.modalData;
  }

  get schools() {
    return this.modalData.schools;
  }

  get school() {
    return this.creatQuestion.get('school');
  }

  get chapter() {
    return this.creatQuestion.get('chapter');
  }

  get course() {
    return this.creatQuestion.get('course');
  }

  get questionName() {
    return this.creatQuestion.get('questionName');
  }

  get questionDifficulty() {
    return this.creatQuestion.get('questionDifficulty');
  }

  get book() {
    return this.creatQuestion.get('book');
  }

  get questionNumber() {
    return this.creatQuestion.get('questionNumber');
  }

  get verified() {
    return this.creatQuestion.get('verified');
  }

  closeModal() {
    this.dialogRef.close();
  }

  openViewQuestionModel() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.id = 'view-question-modal';
    dialogConfig.height = '80%';
    dialogConfig.width = '80%';
    dialogConfig.data = this.getQuestion();

    this.matDialog.open(QuestionViewModalComponent, dialogConfig);
  }

  openAddAnswerModal() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.id = 'add-answer-modal';
    dialogConfig.height = '450px';
    dialogConfig.width = '300px';

    const modalDialog = this.matDialog.open(AnswersComponent, dialogConfig);
    modalDialog.afterClosed().subscribe(result => {
      if (result && result.externalId) {
        this.answers.push(result);
      }
    });
  }

  openEditAnswerModal(answer: Answer) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.id = 'edit-answer-modal';
    dialogConfig.height = '450px';
    dialogConfig.width = '300px';
    dialogConfig.data = {answer};

    const modalDialog = this.matDialog.open(AnswersComponent, dialogConfig);
    modalDialog.afterClosed().subscribe(result => {
      if (result && result.externalId) {
        this.deleteAnswer(answer);
        this.answers.push(result);
      }
    });
  }

  deleteAnswer(answer: Answer) {
    const index: number = this.answers.indexOf(answer);
    if (index !== -1) {
      this.answers.splice(index, 1);
    }
  }

  saveQuestion() {
    if (!this.valid()) {
      return;
    }

    const question = this.constructQuestion();
    this.saveOrUpdate(question).subscribe(
      data => {
        console.log(question);
        this.toastr.success('Question saved');
        this.dialogRef.close(true);
      },
      error1 => {
        this.toastr.error(error1.message, 'A aparut o eroare');
      }
    );
  }

  private saveOrUpdate(question: Question) {
    if (this.updateQuestion) {
      return this.questionService.updateQuestion(question);
    } else {
      return this.questionService.createQuestion(question);
    }
  }

  private constructQuestion(): Question {
    const question = new Question();

    const answers = this.answers;
    answers.forEach(answer => {
        if (answer.isNewAnswer) {
          answer.externalId = null;
        }
      }
    );
    question.answers = answers;
    question.name = this.questionName.value;
    question.verified = this.verified.value;
    question.book = this.book.value;
    question.topicExternalId = this.getChapterExternalId();
    question.courseExternalId = this.getCourseExternalId();
    question.externalId = this.questionExternalId;
    question.questionDifficulty = this.questionDifficulty.value;
    question.school = this.getSchoolExternalId();
    question.questionNumber = this.questionNumber.value;
    return question;
  }

  private getSchoolExternalId() {
    let response = '';
    this.schools.forEach(school => {
      if (school.name === this.school.value) {
        response = school.externalId;
      }
    });
    return response;
  }

  private getCourseExternalId() {
    let response = '';
    this.courses.forEach(course => {
      if (course.name === this.course.value) {
        response = course.externalId;
      }
    });
    return response;
  }

  private getChapterExternalId() {
    let response = '';
    this.topics.forEach(chapter => {
      if (chapter.name === this.chapter.value) {
        response = chapter.externalId;
      }
    });
    return response;
  }

  valid() {
    if (this.answers.length === 0 || !this.creatQuestion.valid) {
      return false;
    }
    let containsCorrectAnswers = false;
    this.answers.forEach(answer => {
      if (answer.correct) {
        containsCorrectAnswers = true;
      }
    });

    if (this.answers.length > 0 && !containsCorrectAnswers) {
      this.error = 'Intrebarea trebuie sa contina cel putin un raspuns corect';
      return false;
    }
    return true;
  }

  private getQuestion(): Question {
    const question = new Question();
    question.name = this.questionName.value;
    question.answers = this.answers;
    return question;
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

  private initFormForUpdate(question: any) {
    this.creatQuestion = new FormGroup({
      questionName: new FormControl(question.name, {
        validators: [Validators.required]
      }),
      questionDifficulty: new FormControl(question.questionDifficulty, {
        validators: [Validators.required]
      }),
      school: new FormControl(question.school, {
        validators: []
      }),
      chapter: new FormControl(question.chapter, {
        validators: []
      }),
      course: new FormControl(question.course, {
        validators: []
      }),
      questionNumber: new FormControl(question.questionNumber, {
        validators: []
      }),
      book: new FormControl(question.book, {
        validators: []
      }),
      verified: new FormControl(question.verified, {
        validators: []
      })
    });
  }
}
