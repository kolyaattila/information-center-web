import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ChemistryAnswerComponent} from './chemistry-answer.component';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../../../../../shared/shared.module';
import {Answer} from '../../../../../shared/models/answer';
import {ElementRef, Renderer2} from '@angular/core';


describe('ChemistryAnswerComponent', () => {
  let component: ChemistryAnswerComponent;
  let fixture: ComponentFixture<ChemistryAnswerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChemistryAnswerComponent],
      imports: [BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule],
      providers: []
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChemistryAnswerComponent);
    component = fixture.componentInstance;
    const answer = new Answer();
    answer.parseText = 'parseText';
    answer.correct = true;
    answer.selected = true;
    component.answer = answer;
    component.view_mode = 'question';
    component.questionStatus = true;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
