import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {VideoListComponent} from './video-list.component';
import {CommonRepositoryService} from '../../../../core/shared/service/common-repository.service';
import {CommonRepositoryMockService} from '../../../../core/shared/service/common-repository.mock.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '../../../../shared/matirial/matirial.module';
import {RouterTestingModule} from '@angular/router/testing';
import {ToastrService} from 'ngx-toastr';

describe('VideoListComponent', () => {
  let component: VideoListComponent;
  let fixture: ComponentFixture<VideoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule, MaterialModule, RouterTestingModule],
      declarations: [VideoListComponent],
      providers: [
        {provide: ToastrService, useValue: {}},
        {provide: CommonRepositoryService, useValue: new CommonRepositoryMockService()}
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
