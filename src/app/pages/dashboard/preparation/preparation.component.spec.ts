import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreparationComponent } from './preparation.component';
import {CarouselModule} from 'ngx-owl-carousel-o';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';

describe('PreparationComponent', () => {
  let component: PreparationComponent;
  let fixture: ComponentFixture<PreparationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CarouselModule, BrowserAnimationsModule, NoopAnimationsModule],
      declarations: [ PreparationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreparationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
