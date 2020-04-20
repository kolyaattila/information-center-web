import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {SubscriptionActivationComponent} from './subscription-activation.component';
import {CommonRepositoryService} from '../../core/shared/service/common-repository.service';
import {CommonRepositoryMockService} from '../../core/shared/service/common-repository.mock.service';
import {ToastrService} from 'ngx-toastr';

describe('SubscriptionActivationComponent', () => {
  let component: SubscriptionActivationComponent;
  let fixture: ComponentFixture<SubscriptionActivationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [SubscriptionActivationComponent],
      providers: [
        {provide: CommonRepositoryService, useValue: new CommonRepositoryMockService()},
        {
          provide: ToastrService, useValue: {
            success() {
            }
          }
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriptionActivationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
