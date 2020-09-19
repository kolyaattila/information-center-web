import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {OurCourseComponent} from './our-course.component';
import {RouterModule} from '@angular/router';
import {CommonRepositoryService} from '../../../core/shared/service/common-repository.service';
import {CommonRepositoryMockService} from '../../../core/shared/service/common-repository.mock.service';

describe('OurCourseComponent', () => {
  let component: OurCourseComponent;
  let fixture: ComponentFixture<OurCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OurCourseComponent],
      imports: [RouterModule],
      providers: [
        {provide: CommonRepositoryService, useValue: new CommonRepositoryMockService()}
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
