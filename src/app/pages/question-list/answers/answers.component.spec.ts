import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AnswersComponent} from './answers.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {SharedModule} from '../../../shared/shared.module';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';

describe('AnswersComponent', () => {
  let component: AnswersComponent;
  let fixture: ComponentFixture<AnswersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AnswersComponent],
      imports: [BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        BrowserAnimationsModule,
        NoopAnimationsModule],
      providers: [{provide: MatDialogRef, useValue: {}},
        {provide: MAT_DIALOG_DATA, useValue: {answer: {name: 'name', reason: '', corect: '', key: ''}}}]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
