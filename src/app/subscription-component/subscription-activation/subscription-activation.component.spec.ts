import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionActivationComponent } from './subscription-activation.component';

describe('SubscriptionActivationComponent', () => {
  let component: SubscriptionActivationComponent;
  let fixture: ComponentFixture<SubscriptionActivationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscriptionActivationComponent ]
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
