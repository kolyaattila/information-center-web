import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MyQuizComponent} from './my-quiz.component';
import {SharedModule} from '../../../shared/shared.module';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {CommonRepositoryService} from '../../../core/shared/service/common-repository.service';
import {CommonRepositoryMockService} from '../../../core/shared/service/common-repository.mock.service';

describe('MyQuizComponent', () => {
  let component: MyQuizComponent;
  let fixture: ComponentFixture<MyQuizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MyQuizComponent],
      imports: [SharedModule, BrowserAnimationsModule, NoopAnimationsModule],
      providers: [
        {provide: CommonRepositoryService, useValue: new CommonRepositoryMockService()}
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
