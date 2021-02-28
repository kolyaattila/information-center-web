import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MathQuestionComponent} from './math-question.component';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../../../../../../shared/shared.module';

describe('MathQuestionComponent', () => {
  let component: MathQuestionComponent;
  let fixture: ComponentFixture<MathQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MathQuestionComponent],
      imports: [BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule],
      providers: []
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MathQuestionComponent);
    component = fixture.componentInstance;
    component.question = {parseText: 'parseText'};
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
