import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AddTopicModelComponent} from './add-topic-model.component';

describe('AddTopicModelComponent', () => {
  let component: AddTopicModelComponent;
  let fixture: ComponentFixture<AddTopicModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddTopicModelComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTopicModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
