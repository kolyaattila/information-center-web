import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SubscriptionComponentComponent} from './subscription-component.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonRepositoryService} from '../core/shared/service/common-repository.service';
import {CommonRepositoryMockService} from '../core/shared/service/common-repository.mock.service';
import {ToastrService} from 'ngx-toastr';

describe('SubscriptionComponentComponent', () => {
  let component: SubscriptionComponentComponent;
  let fixture: ComponentFixture<SubscriptionComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule],
      declarations: [SubscriptionComponentComponent],
      providers: [
        {provide: ToastrService, useValue: {}},
        {provide: CommonRepositoryService, useValue: new CommonRepositoryMockService()}
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriptionComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
