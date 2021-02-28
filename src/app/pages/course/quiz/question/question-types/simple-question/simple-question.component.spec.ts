import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SimpleQuestionComponent} from './simple-question.component';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../../../../../../shared/shared.module';

describe('SimpleQuestionComponent', () => {
  let component: SimpleQuestionComponent;
  let fixture: ComponentFixture<SimpleQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SimpleQuestionComponent],
      imports: [BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule],
      providers: []
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleQuestionComponent);
    component = fixture.componentInstance;
    component.question = {name: 'name'};
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
