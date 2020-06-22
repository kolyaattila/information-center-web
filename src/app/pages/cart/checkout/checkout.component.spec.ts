import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CheckoutComponent} from './checkout.component';
import {CourseModule} from '../../course/course.module';
import {SharedModule} from '../../../shared/shared.module';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonRepositoryService} from '../../../core/shared/service/common-repository.service';
import {CommonRepositoryMockService} from '../../../core/shared/service/common-repository.mock.service';

describe('CheckoutComponent', () => {
  let component: CheckoutComponent;
  let fixture: ComponentFixture<CheckoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CheckoutComponent],
      imports: [CourseModule, SharedModule, BrowserAnimationsModule, NoopAnimationsModule, FormsModule, ReactiveFormsModule],
      providers: [
        {provide: CommonRepositoryService, useValue: new CommonRepositoryMockService()},
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
