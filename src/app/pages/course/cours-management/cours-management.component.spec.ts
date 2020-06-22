import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursManagementComponent } from './cours-management.component';

describe('CoursManagementComponent', () => {
  let component: CoursManagementComponent;
  let fixture: ComponentFixture<CoursManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
