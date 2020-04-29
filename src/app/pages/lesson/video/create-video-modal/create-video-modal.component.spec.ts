import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CreateVideoModalComponent} from './create-video-modal.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '../../../../shared/matirial/matirial.module';
import {RouterTestingModule} from '@angular/router/testing';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ToastrService} from 'ngx-toastr';
import {CommonRepositoryService} from '../../../../core/shared/service/common-repository.service';
import {CommonRepositoryMockService} from '../../../../core/shared/service/common-repository.mock.service';

describe('CreateVideoComponent', () => {
  let component: CreateVideoModalComponent;
  let fixture: ComponentFixture<CreateVideoModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule, MaterialModule, RouterTestingModule, BrowserAnimationsModule, NoopAnimationsModule],
      declarations: [CreateVideoModalComponent],
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
    fixture = TestBed.createComponent(CreateVideoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
