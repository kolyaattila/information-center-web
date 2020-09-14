import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CourseCreateModalComponent} from './course-create-modal.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '../../../shared/matirial/matirial.module';
import {RouterTestingModule} from '@angular/router/testing';
import {MatDialogRef} from '@angular/material/dialog';
import {MAT_DIALOG_DATA} from '@angular/material';
import {CommonRepositoryService} from '../../../core/shared/service/common-repository.service';
import {CommonRepositoryMockService} from '../../../core/shared/service/common-repository.mock.service';
import {ToastrService} from 'ngx-toastr';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';

describe('CourseCreateModalComponent', () => {
  let component: CourseCreateModalComponent;
  let fixture: ComponentFixture<CourseCreateModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CourseCreateModalComponent],
      imports: [FormsModule, ReactiveFormsModule, MaterialModule, RouterTestingModule, BrowserAnimationsModule, NoopAnimationsModule],
      providers: [
        {provide: MatDialogRef, useValue: {}},
        {provide: MAT_DIALOG_DATA, useValue: {}},
        {provide: CommonRepositoryService, useValue: new CommonRepositoryMockService()},
        {provide: ToastrService, useValue: {}}
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseCreateModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
