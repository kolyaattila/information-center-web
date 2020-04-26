import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-quiz-result',
  templateUrl: './quiz-result.component.html',
  styleUrls: ['./quiz-result.component.scss']
})
export class QuizResultComponent implements OnInit, OnDestroy {
  questionList = [];
  id: number;
  private sub: any;
  private timerConfig: any;

  constructor(private route: ActivatedRoute) {
    this.questionList = [
      {
        number: 1,
        points: 3,
        name: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        status: false,
        statusMessage: 'Corect',
        answers: [
          {
            name: 'simply dummy',
            selected: true,
            valid: true
          },
          {
            name: 'simply dummy',
            selected: true,
            valid: false
          },
          {
            name: 'simply dummy',
            selected: false,
            valid: true
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
        points: 3,
        name: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        status: true,
        statusMessage: 'Corect',
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
        points: 3,
        name: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        status: false,
        statusMessage: 'Incorect',
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
        points: 3,
        name: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        status: true,
        statusMessage: 'Corect',
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
        points: 3,
        name: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing' +
          ' and typesetting industryLorem Ipsum is simply dummy text of the printing and typesetting industry',
        status: false,
        statusMessage: 'Incorect',
        answers: [
          {
            name: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
            selected: false,
            valid: false
          },
          {
            name: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
            selected: false,
            valid: false
          },
          {
            name: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
            selected: false,
            valid: false
          },
          {
            name: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
            selected: false,
            valid: false
          }
        ]
      }
    ];
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params.id;
      console.log(this.id);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
