import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AccountComponent} from './account.component';
import {MaterialModule} from '../../shared/matirial/matirial.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';
import {CommonRepositoryService} from '../../core/shared/service/common-repository.service';
import {CommonRepositoryMockService} from '../../core/shared/service/common-repository.mock.service';
import {MatDialogRef} from '@angular/material';
import {ToastrService} from 'ngx-toastr';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {AccountService} from '../../core/services/account.service';
import {AccountMockService} from '../../core/services/account.mock.service';

describe('AccountComponent', () => {
  let component: AccountComponent;
  let fixture: ComponentFixture<AccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule, MaterialModule, RouterTestingModule, BrowserAnimationsModule, NoopAnimationsModule],
      declarations: [AccountComponent],
      providers: [
        {provide: CommonRepositoryService, useValue: new CommonRepositoryMockService()},
        {provide: ToastrService, useValue: {}},
        {provide: MatDialogRef, useValue: {}},
        {provide: AccountService, useValue: new AccountMockService()}]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
