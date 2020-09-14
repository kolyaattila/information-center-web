import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DashboardComponent} from './dashboard.component';
import {DashboardModule} from './dashboard.module';
import {CommonRepositoryService} from '../../core/shared/service/common-repository.service';
import {CommonRepositoryMockService} from '../../core/shared/service/common-repository.mock.service';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrService} from 'ngx-toastr';
import {RouterTestingModule} from '@angular/router/testing';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [DashboardModule, BrowserAnimationsModule, NoopAnimationsModule, RouterTestingModule],
      declarations: [],
      providers: [
        {provide: CommonRepositoryService, useValue: new CommonRepositoryMockService()},
        {provide: ToastrService, useValue: {}}
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
