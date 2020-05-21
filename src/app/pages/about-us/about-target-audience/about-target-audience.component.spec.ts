import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AboutTargetAudienceComponent} from './about-target-audience.component';

describe('AboutTargetAudienceComponent', () => {
  let component: AboutTargetAudienceComponent;
  let fixture: ComponentFixture<AboutTargetAudienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AboutTargetAudienceComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutTargetAudienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
