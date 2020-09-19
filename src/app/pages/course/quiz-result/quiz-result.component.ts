import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {QuizService} from '../../../core/services/quiz.service';
import {QuizValidation} from '../../../shared/models/quizValidation';

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
  quiz: QuizValidation;


  constructor(private route: ActivatedRoute,
              private quizService: QuizService) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params.id;
      this.quizService.getValidationQuiz(params.id).subscribe(data => {
        this.quiz = data;
        this.questionList = data.questions;
      });
    });
  }

  get wrongAnswers() {
    let count = 0;
    this.questionList.forEach(q => {
      if (!q.status) {
        count++;
      }
    });
    return count;
  }

  get correctAnswers() {
    let count = 0;
    this.questionList.forEach(q => {
      if (q.status) {
        count++;
      }
    });
    return count;
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
