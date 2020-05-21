import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AboutOurInfoComponent} from './about-our-info.component';

describe('AboutOurInfoComponent', () => {
  let component: AboutOurInfoComponent;
  let fixture: ComponentFixture<AboutOurInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AboutOurInfoComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutOurInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
