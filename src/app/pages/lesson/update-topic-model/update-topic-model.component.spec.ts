import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {UpdateTopicModelComponent} from './update-topic-model.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '../../../shared/matirial/matirial.module';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {CommonRepositoryService} from '../../../core/shared/service/common-repository.service';
import {CommonRepositoryMockService} from '../../../core/shared/service/common-repository.mock.service';
import {ToastrService} from 'ngx-toastr';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';

describe('UpdateTopicModelComponent', () => {
  let component: UpdateTopicModelComponent;
  let fixture: ComponentFixture<UpdateTopicModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule, MaterialModule, BrowserAnimationsModule, NoopAnimationsModule],
      declarations: [UpdateTopicModelComponent],
      providers: [{provide: MatDialogRef, useValue: {}},
        {provide: CommonRepositoryService, useValue: new CommonRepositoryMockService()},
        {provide: ToastrService, useValue: {}},
        {provide: MAT_DIALOG_DATA, useValue: {}}]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTopicModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
