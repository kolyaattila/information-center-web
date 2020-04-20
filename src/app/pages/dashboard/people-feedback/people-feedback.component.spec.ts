import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PeopleFeedbackComponent} from './people-feedback.component';
import {CarouselModule} from 'ngx-owl-carousel-o';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';


describe('PeopleFeedbackComponent', () => {
  let component: PeopleFeedbackComponent;
  let fixture: ComponentFixture<PeopleFeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CarouselModule, BrowserAnimationsModule, NoopAnimationsModule],
      declarations: [PeopleFeedbackComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
