import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Answer} from '../../../../../shared/models/answer';

@Component({
  selector: 'app-math-answer',
  templateUrl: './math-answer.component.html',
  styleUrls: ['./math-answer.component.scss']
})
export class MathAnswerComponent implements OnInit {

  @Input() answer: Answer;
  @Output() answerChange: EventEmitter<Answer> = new EventEmitter<Answer>();
  @Input() view_mode;
  @Input() questionStatus;

  constructor() {
  }

  ngOnInit() {
  }
}
