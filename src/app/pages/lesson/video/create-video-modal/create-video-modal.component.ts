import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Video} from '../../../../shared/models/video';
import {VideoService} from '../../../../core/services/video.service';
import {TopicService} from '../../../../core/services/topic.service';
import {Router} from '@angular/router';
import {Topic} from '../../../../shared/models/topic';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ToastrService} from 'ngx-toastr';
import {DomSanitizer} from '@angular/platform-browser';
import {Course} from '../../../../shared/models/course';
import {CourseService} from '../../../../core/services/course.service';

@Component({
  selector: 'app-create-video',
  templateUrl: './create-video-modal.component.html',
  styleUrls: ['./create-video-modal.component.scss']
})
export class CreateVideoModalComponent implements OnInit {

  selected = 'None';
  public formGroup: FormGroup;
  video: Video = new Video();
  file: File;
  topics: Topic[] = [];
  courses: Course[] = [];
  videoUrl;
  videoDuration = 0;
  fileName: string;


  constructor(private router: Router,
              private topicService: TopicService,
              private videoService: VideoService,
              private formBuilder: FormBuilder,
              public dialogRef: MatDialogRef<CreateVideoModalComponent>,
              @Inject(MAT_DIALOG_DATA) private modalData: any,
              private toastr: ToastrService,
              private sanitizer: DomSanitizer,
              private courseService: CourseService) {

    if (modalData && modalData.course && modalData.topic) {
      this.initData(modalData);
    } else {
      this.courseService.getAllActiveCourses().subscribe(course => {
        this.courses = course;
      });
    }
  }

  private initData(modalData: any) {
    this.courses.push(modalData.course);
    this.video.course = modalData.course.name;
    this.video.courseExternalId = modalData.course.externalId;
    this.video.topicExternalId = modalData.topic.externalId;
    this.video.topic = modalData.topic.name;
    this.topics.push(modalData.topic);
  }

  ngOnInit() {

    this.initForm(this.video);
  }

  cancel() {
    this.restoreForm(this.formGroup);
    this.closeModal(false);
  }

  onFileChanged(event) {
    const files = event.target.files[0];
    if (files.size < 1000 * 1000 * 1000) {// 1GB
      this.file = files;
      this.fileName = files.name;
    } else {
      this.toastr.error('Video depășește 1GB');
    }
    if (files) {
      this.videoUrl = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(files));
    }
  }

  save() {
    this.video = this.formGroup.value as Video;
    this.video.videoDuration = this.videoDuration.toString();
    this.addTopicIdToVideo();
    this.addCourseIdToVideo();
    this.videoService.save(this.video, this.file).subscribe(
      data => {
        this.toastr.success('Video salvat cu succes');
        this.closeModal(true);
      },
      error => {
        this.toastr.error('A aparut o eroare');
      }
    );
  }

  closeModal(response: boolean) {
    this.dialogRef.close(response);
  }

  initForm(video: Video) {
    this.formGroup = this.formBuilder.group({
      course: [video.course, [Validators.required, Validators.minLength(3)]],
      topic: [video.topic, [Validators.required, Validators.minLength(3)]],
      title: [video.title, [Validators.required, Validators.minLength(3)]],
      description: [video.description, [Validators.required, Validators.minLength(3)]],
      file: [video.file]
    });
  }

  restoreForm(formGroup: FormGroup) {
    if (formGroup != null) {
      formGroup.reset();
      this.formGroup = this.formBuilder.group({
        chapter: '',
        title: '',
        description: '',
        file: null
      });
    }
  }

  addTopicIdToVideo() {
    this.topics.forEach(topic => {
      if (this.video.topic === topic.name) {
        this.video.topicExternalId = topic.externalId;
      }
    });
  }

  addCourseIdToVideo() {
    this.courses.forEach(course => {
      if (this.video.course === course.name) {
        this.video.courseExternalId = course.externalId;
      }
    });
  }

  getDuration(e) {
    this.videoDuration = e.target.duration;
  }
}
