import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {QuestionComponent} from './question.component';
import {SharedModule} from '../../../../shared/shared.module';
import {CourseModule} from '../../course.module';
import {Question} from '../../../../shared/models/question';
import {ElementRef, Renderer2} from '@angular/core';

describe('QuestionComponent', () => {
  let component: QuestionComponent;
  let fixture: ComponentFixture<QuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule, CourseModule],
      declarations: [],
      providers: []
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionComponent);
    component = fixture.componentInstance;
    component.question = new Question();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
