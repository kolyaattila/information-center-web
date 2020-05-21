import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AboutGoalsComponent} from './about-goals.component';

describe('AboutGoalsComponent', () => {
  let component: AboutGoalsComponent;
  let fixture: ComponentFixture<AboutGoalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AboutGoalsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutGoalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
