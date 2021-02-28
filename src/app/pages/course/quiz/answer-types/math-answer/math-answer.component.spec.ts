import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MathAnswerComponent} from './math-answer.component';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../../../../../shared/shared.module';
import {Answer} from '../../../../../shared/models/answer';

describe('MathAnswerComponent', () => {
  let component: MathAnswerComponent;
  let fixture: ComponentFixture<MathAnswerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MathAnswerComponent],
      imports: [BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule],
      providers: []
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MathAnswerComponent);
    component = fixture.componentInstance;
    const answer = new Answer();
    answer.selected = true;
    answer.correct = true;
    component.answer = answer;
    component.view_mode = 'question';
    component.questionStatus = true;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
