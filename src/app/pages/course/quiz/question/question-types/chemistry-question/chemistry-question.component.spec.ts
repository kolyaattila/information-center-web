import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ChemistryQuestionComponent} from './chemistry-question.component';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../../../../../../shared/shared.module';
import {Question} from '../../../../../../shared/models/question';
import {ElementRef, Renderer2} from '@angular/core';

describe('ChemistryQuestionComponent', () => {
  let component: ChemistryQuestionComponent;
  let fixture: ComponentFixture<ChemistryQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChemistryQuestionComponent],
      imports: [BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChemistryQuestionComponent);
    component = fixture.componentInstance;
    const question = new Question();
    question.name = 'name';
    question.parseText = 'parseText';
    component.chemistryQuestion = question;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
