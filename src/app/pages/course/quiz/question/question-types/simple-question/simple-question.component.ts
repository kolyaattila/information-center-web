import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-simple-question',
  templateUrl: './simple-question.component.html',
  styleUrls: ['./simple-question.component.scss']
})
export class SimpleQuestionComponent implements OnInit {
  @Input() question;

  constructor() {
  }

  ngOnInit() {
  }

}
