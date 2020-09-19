import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CourseDetailsComponent} from './course-details.component';
import {SharedModule} from '../../../shared/shared.module';
import {CourseModule} from '../course.module';
import {ActivatedRoute} from '@angular/router';
import {of} from 'rxjs';
import {CommonRepositoryService} from '../../../core/shared/service/common-repository.service';
import {CommonRepositoryMockService} from '../../../core/shared/service/common-repository.mock.service';
import {ToastrService} from 'ngx-toastr';
import {RouterTestingModule} from '@angular/router/testing';

describe('CourseDetailsComponent', () => {
  let component: CourseDetailsComponent;
  let fixture: ComponentFixture<CourseDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule, CourseModule, RouterTestingModule],
      declarations: [],
      providers: [
        {provide: ActivatedRoute, useValue: {params: of({id: 'test'})}},
        {provide: CommonRepositoryService, useValue: new CommonRepositoryMockService()},
        {provide: ToastrService, useValue: {}}
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
