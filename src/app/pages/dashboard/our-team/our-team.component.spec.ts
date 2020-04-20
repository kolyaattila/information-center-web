import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {OurTeamComponent} from './our-team.component';
import {CarouselModule} from 'ngx-owl-carousel-o';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';

describe('OurTeamComponent', () => {
  let component: OurTeamComponent;
  let fixture: ComponentFixture<OurTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CarouselModule, BrowserAnimationsModule, NoopAnimationsModule],
      declarations: [OurTeamComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
