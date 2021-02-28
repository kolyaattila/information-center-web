import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Answer} from '../../../../../shared/models/answer';

@Component({
  selector: 'app-simple-answer',
  templateUrl: './simple-answer.component.html',
  styleUrls: ['./simple-answer.component.scss']
})
export class SimpleAnswerComponent implements OnInit {

  @Input() answer: Answer;
  @Output() answerChange: EventEmitter<Answer> = new EventEmitter<Answer>();
  @Input() view_mode;
  @Input() questionStatus;

  constructor() {
  }

  ngOnInit() {
  }

}
