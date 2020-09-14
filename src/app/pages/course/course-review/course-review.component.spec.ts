import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CourseReviewComponent} from './course-review.component';
import {CourseModule} from '../course.module';
import {CommonRepositoryService} from '../../../core/shared/service/common-repository.service';
import {CommonRepositoryMockService} from '../../../core/shared/service/common-repository.mock.service';

describe('CourseReviewComponent', () => {
  let component: CourseReviewComponent;
  let fixture: ComponentFixture<CourseReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [CourseModule],
      providers: [
        {provide: CommonRepositoryService, useValue: new CommonRepositoryMockService()}
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
