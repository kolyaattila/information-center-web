import {Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {ConfirmationModalComponent} from '../../../shared/modal/confirmation-modal/confirmation-modat.component';
import {ActivatedRoute} from '@angular/router';
import {QuizService} from '../../../core/services/quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  private id: string;

  constructor(public matDialog: MatDialog,
              private route: ActivatedRoute,
              private quizService: QuizService) {
    this.questionList = [
      {
        number: 1,
        points: 1,
        name: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        answers: [
          {
            name: 'simply dummy',
            selected: false,
            valid: false
          },
          {
            name: 'simply dummy',
            selected: false,
            valid: false
          },
          {
            name: 'simply dummy',
            selected: false,
            valid: false
          },
          {
            name: 'simply dummy',
            selected: false,
            valid: false
          }
        ]
      },
      {
        number: 2,
        points: 1,
        name: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        answers: [
          {
            name: 'simply dummy',
            selected: false,
            valid: false
          },
          {
            name: 'simply dummy',
            selected: false,
            valid: false
          },
          {
            name: 'simply dummy',
            selected: false,
            valid: false
          },
          {
            name: 'simply dummy',
            selected: false,
            valid: false
          }
        ]
      },
      {
        number: 3,
        points: 1,
        name: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        answers: [
          {
            name: 'simply dummy',
            selected: false,
            valid: false
          },
          {
            name: 'simply dummy',
            selected: false,
            valid: false
          },
          {
            name: 'simply dummy',
            selected: false,
            valid: false
          },
          {
            name: 'simply dummy',
            selected: false,
            valid: false
          }
        ]
      },
      {
        number: 4,
        points: 1,
        name: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        answers: [
          {
            name: 'simply dummy',
            selected: false,
            valid: false
          },
          {
            name: 'simply dummy',
            selected: false,
            valid: false
          },
          {
            name: 'simply dummy',
            selected: true,
            valid: false
          },
          {
            name: 'simply dummy',
            selected: false,
            valid: false
          }
        ]
      },
      {
        number: 5,
        points: 1,
        name: 'What is one common time management mistake?',
        answers: [
          {
            name: 'Procrastination',
            selected: false,
            valid: false
          },
          {
            name: 'Taking Breaks',
            selected: false,
            valid: false
          },
          {
            name: 'Manage Distractions',
            selected: false,
            valid: false
          },
          {
            name: 'Scheduling Tasks',
            selected: false,
            valid: false
          }
        ]
      }
    ];
  }


  quizStarted = false;
  selectedQuestion = {
    question: {answers: [{}]},
    questionIndex: -1
  };
  questionList: any;

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
      console.log(params.id);
      this.quizService.getQuizById(params.id).subscribe(data => console.log(data));
    });
  }

  startQuiz() {
    this.quizStarted = true;
    this.selectedQuestion = {
      question: this.questionList[0],
      questionIndex: 0
    };
  }

  nextQuestion() {
    if (this.selectedQuestion.questionIndex !== this.questionList.length - 1 && this.quizStarted) {
      const index = this.selectedQuestion.questionIndex + 1;
      this.selectedQuestion = {
        question: this.questionList[index],
        questionIndex: index
      };
    }
  }

  previousQuestion() {
    if (this.selectedQuestion.questionIndex !== 0 && this.quizStarted) {
      const index = this.selectedQuestion.questionIndex - 1;
      this.selectedQuestion = {
        question: this.questionList[index],
        questionIndex: index
      };
    }
  }

  changeQuestion(index) {
    if (index < this.questionList.length && index >= 0 && this.quizStarted) {
      this.selectedQuestion = {
        question: this.questionList[index],
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
      console.log('rezultat');
    } else if (this.quizStarted) {
      this.confirmationSubmitQuiz();
    }
  }

  allQuestionSolved(): boolean {
    let result = true;
    this.questionList.forEach(question => {
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
        console.log('submit');
      }
    });
  }

  getUnsolvedQuestion() {
    const result = [];
    this.questionList.forEach(question => {
      const questionSolved = this.questionSolved(question);
      if (!questionSolved) {
        result.push(question);
      }
    });
    return result;
  }

}
