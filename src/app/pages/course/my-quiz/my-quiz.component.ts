import {Component, OnInit} from '@angular/core';
import {AccountService} from '../../../core/services/account.service';
import {QuizService} from '../../../core/services/quiz.service';
import {Quiz} from '../../../shared/models/quiz';

@Component({
  selector: 'app-my-quiz',
  templateUrl: './my-quiz.component.html',
  styleUrls: ['./my-quiz.component.scss']
})
export class MyQuizComponent implements OnInit {
  quizzes: Quiz[];

  constructor(private accountService: AccountService,
              private quizService: QuizService) {
  }

  ngOnInit() {
    this.accountService.getCurrentAccount()
      .subscribe(account => {
        this.quizService.getMyQuizzes(account.uid).subscribe(quizList => this.quizzes = quizList);
      });
  }

}
