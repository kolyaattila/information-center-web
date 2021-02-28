import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SimpleAnswerComponent} from './simple-answer.component';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../../../../../shared/shared.module';

describe('SimpleAnswerComponent', () => {
  let component: SimpleAnswerComponent;
  let fixture: ComponentFixture<SimpleAnswerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SimpleAnswerComponent],
      imports: [BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleAnswerComponent);
    component = fixture.componentInstance;
    component.answer = {name: 'mame', selected: true, correct: false};
    component.view_mode = 'question';
    component.questionStatus = true;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
