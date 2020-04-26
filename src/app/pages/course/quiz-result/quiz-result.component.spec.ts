import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {QuizResultComponent} from './quiz-result.component';
import {CourseModule} from '../course.module';
import {SharedModule} from '../../../shared/shared.module';
import {ActivatedRoute} from '@angular/router';
import {of} from 'rxjs';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';

describe('QuizResultComponent', () => {
  let component: QuizResultComponent;
  let fixture: ComponentFixture<QuizResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CourseModule, SharedModule, BrowserAnimationsModule, NoopAnimationsModule],
      declarations: [],
      providers: [
        {
          provide: ActivatedRoute, useValue: {
            params: of({id: 'test'})
          }
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
