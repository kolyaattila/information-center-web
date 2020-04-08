import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTopicModelComponent } from './update-topic-model.component';

describe('UpdateTopicModelComponent', () => {
  let component: UpdateTopicModelComponent;
  let fixture: ComponentFixture<UpdateTopicModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateTopicModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTopicModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
