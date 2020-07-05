import {Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {ConfirmationModalComponent} from '../../../shared/modal/confirmation-modal/confirmation-modat.component';
import {ActivatedRoute, Router} from '@angular/router';
import {QuizService} from '../../../core/services/quiz.service';
import {Quiz} from '../../../shared/models/quiz';
import {QuizValidation} from '../../../shared/models/quizValidation';
import {AccountService} from '../../../core/services/account.service';
import {CourseService} from '../../../core/services/course.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  private id: string;
  quiz: Quiz;
  quizStarted = false;
  selectedQuestion = {
    question: undefined,
    questionIndex: -1
  };
  private userExternalId = '';
  courseName = '';

  constructor(public matDialog: MatDialog,
              private route: ActivatedRoute,
              private quizService: QuizService,
              private accountService: AccountService,
              private router: Router,
              private courseService: CourseService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.quizService.getQuizById(params.id).subscribe(data => {
        this.quiz = data;
        this.courseService.getCourseById(data.courseExternalId)
          .subscribe(course => this.courseName = course.name);

      });
    });

    this.accountService.getCurrentAccount().subscribe(account => this.userExternalId = account.uid);
  }

  startQuiz() {
    this.quizStarted = true;
    this.selectedQuestion = {
      question: this.quiz.questions[0],
      questionIndex: 0
    };
  }

  nextQuestion() {
    if (this.quiz && this.selectedQuestion.questionIndex !== this.quiz.questions.length - 1 && this.quizStarted) {
      const index = this.selectedQuestion.questionIndex + 1;
      this.selectedQuestion = {
        question: this.quiz.questions[index],
        questionIndex: index
      };
    }
  }

  previousQuestion() {
    if (this.quiz && this.selectedQuestion.questionIndex !== 0 && this.quizStarted) {
      const index = this.selectedQuestion.questionIndex - 1;
      this.selectedQuestion = {
        question: this.quiz.questions[index],
        questionIndex: index
      };
    }
  }

  changeQuestion(index) {
    if (this.quiz && index < this.quiz.questions.length && index >= 0 && this.quizStarted) {
      this.selectedQuestion = {
        question: this.quiz.questions[index],
        questionIndex: index
      };
    }
  }

  questionSolved(question): boolean {
    if (!question) {
      return false;
    }
    let result = false;
    question.answers.forEach(answer => {
      if (answer.selected) {
        result = true;
      }
    });
    return result;
  }

  submitQuiz() {
    if (this.allQuestionSolved() && this.quizStarted) {
      this.validateQuiz();
    } else if (this.quizStarted) {
      this.confirmationSubmitQuiz();
    }
  }

  private validateQuiz() {
    const quizValidation = new QuizValidation();
    quizValidation.questions = this.quiz.questions;
    quizValidation.externalId = this.quiz.externalId;
    quizValidation.userExternalId = this.userExternalId;

    this.quizService.validateQuiz(quizValidation)
      .subscribe((data: QuizValidation) => {
          this.router.navigate(['/course/result/quiz/' + data.externalId]);
        },
        error => console.log(error));
  }

  allQuestionSolved(): boolean {
    let result = true;
    this.quiz.questions.forEach(question => {
      const questionSolved = this.questionSolved(question);
      if (!questionSolved) {
        result = false;
      }
    });
    return result;
  }

  confirmationSubmitQuiz() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.id = 'confirmation-modal';
    dialogConfig.height = '300px';
    dialogConfig.width = '500px';

    let unsolvedQuestion = '';
    this.getUnsolvedQuestion().forEach(
      question => {
        if (unsolvedQuestion !== '') {
          unsolvedQuestion += ', ';
        }
        unsolvedQuestion += question.number;
      }
    );

    dialogConfig.data = {
      name: 'Submit quiz',
      title: 'Sunteti sigur ca doriti sa dati submit la quiz?',
      description: 'Nu ati raspuns la intrebarile: ' + unsolvedQuestion,
      actionButtonText: 'Submit'
    };

    const modalDialog = this.matDialog.open(ConfirmationModalComponent, dialogConfig);
    modalDialog.afterClosed().subscribe(result => {
      if (result) {
        this.validateQuiz();
      }
    });
  }

  getUnsolvedQuestion() {
    const result = [];
    this.quiz.questions.forEach(question => {
      const questionSolved = this.questionSolved(question);
      if (!questionSolved) {
        result.push(question);
      }
    });
    return result;
  }

}
