import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {QuestionComponent} from './question.component';
import {SharedModule} from '../../../../shared/shared.module';

describe('QuestionComponent', () => {
  let component: QuestionComponent;
  let fixture: ComponentFixture<QuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [QuestionComponent],
      providers: [{
        provide: 'question', useValue: {answers: []}
      }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
