import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {QuestionViewModalComponent} from './question-view-modal.component';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../../../shared/shared.module';
import {CourseModule} from '../../course/course.module';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {ToastrService} from 'ngx-toastr';
import {CommonRepositoryService} from '../../../core/shared/service/common-repository.service';
import {CommonRepositoryMockService} from '../../../core/shared/service/common-repository.mock.service';

describe('QuestionViewModalComponent', () => {
  let component: QuestionViewModalComponent;
  let fixture: ComponentFixture<QuestionViewModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [QuestionViewModalComponent],
      imports: [BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        CourseModule],
      providers: [
        {provide: MatDialogRef, useValue: {}},
        {provide: ToastrService, useValue: {}},
        {provide: CommonRepositoryService, useValue: new CommonRepositoryMockService()},
        {provide: MAT_DIALOG_DATA, useValue: {}}
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionViewModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
