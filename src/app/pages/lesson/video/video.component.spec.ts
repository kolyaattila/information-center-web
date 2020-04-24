import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {VideoComponent} from './video.component';
import {CommonRepositoryService} from '../../../core/shared/service/common-repository.service';
import {CommonRepositoryMockService} from '../../../core/shared/service/common-repository.mock.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '../../../shared/matirial/matirial.module';
import {RouterTestingModule} from '@angular/router/testing';
import {VideoModule} from './video.module';
import {ToastrService} from 'ngx-toastr';

describe('VideoComponent', () => {
  let component: VideoComponent;
  let fixture: ComponentFixture<VideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule, MaterialModule, RouterTestingModule, VideoModule],
      declarations: [],
      providers: [
        {provide: ToastrService, useValue: {}},
        {provide: CommonRepositoryService, useValue: new CommonRepositoryMockService()}
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
