import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LessonComponent} from './lesson.component';
import {LessonModule} from './lesson.module';
import {CommonRepositoryService} from '../../core/shared/service/common-repository.service';
import {CommonRepositoryMockService} from '../../core/shared/service/common-repository.mock.service';
import {ToastrService} from 'ngx-toastr';
import {RouterTestingModule} from '@angular/router/testing';


describe('LessonComponent', () => {
  let component: LessonComponent;
  let fixture: ComponentFixture<LessonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [LessonModule, RouterTestingModule],
      declarations: [],
      providers: [
        {provide: ToastrService, useValue: {}},
        {provide: CommonRepositoryService, useValue: new CommonRepositoryMockService()}
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
