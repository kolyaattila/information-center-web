import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {QuizComponent} from './quiz.component';
import {CourseModule} from '../course.module';
import {SharedModule} from '../../../shared/shared.module';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {ActivatedRoute, Router} from '@angular/router';
import {of} from 'rxjs';
import {CommonRepositoryService} from '../../../core/shared/service/common-repository.service';
import {CommonRepositoryMockService} from '../../../core/shared/service/common-repository.mock.service';

describe('QuizComponent', () => {
  let component: QuizComponent;
  let fixture: ComponentFixture<QuizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CourseModule, SharedModule, BrowserAnimationsModule, NoopAnimationsModule],
      declarations: [],
      providers: [
        {provide: ActivatedRoute, useValue: {params: of({id: 'test'})}},
        {provide: CommonRepositoryService, useValue: new CommonRepositoryMockService()},
        {provide: Router, useValue: {}}
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    fixture.whenStable().then(() => {
      expect(component).toBeTruthy();

    });
  });
});
