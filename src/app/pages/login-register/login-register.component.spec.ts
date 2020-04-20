import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LoginRegisterComponent} from './login-register.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '../../shared/matirial/matirial.module';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientModule} from '@angular/common/http';
import {ToastrService} from 'ngx-toastr';
import {CommonRepositoryService} from '../../core/shared/service/common-repository.service';
import {CommonRepositoryMockService} from '../../core/shared/service/common-repository.mock.service';

describe('LoginRegisterComponent', () => {
  let component: LoginRegisterComponent;
  let fixture: ComponentFixture<LoginRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule, MaterialModule, RouterTestingModule, HttpClientModule],
      declarations: [LoginRegisterComponent],
      providers: [{provide: ToastrService, useValue: {}},
        {provide: CommonRepositoryService, useValue: new CommonRepositoryMockService()}]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
