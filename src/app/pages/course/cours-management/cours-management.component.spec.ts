import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CoursManagementComponent} from './cours-management.component';
import {CourseModule} from '../course.module';
import {CommonRepositoryService} from '../../../core/shared/service/common-repository.service';
import {CommonRepositoryMockService} from '../../../core/shared/service/common-repository.mock.service';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';

describe('CoursManagementComponent', () => {
  let component: CoursManagementComponent;
  let fixture: ComponentFixture<CoursManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [CourseModule, BrowserAnimationsModule, NoopAnimationsModule],
      providers: [
        {provide: CommonRepositoryService, useValue: new CommonRepositoryMockService()},
        {provide: ToastrService, useValue: {}},
        {provide: Router, useValue: {}},
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
