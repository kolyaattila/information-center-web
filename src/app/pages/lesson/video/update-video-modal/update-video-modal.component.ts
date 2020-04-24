import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Video} from '../../../../shared/models/video';
import {ActivatedRoute, Router} from '@angular/router';
import {TopicService} from '../../../../core/services/topic.service';
import {Topic} from '../../../../shared/models/topic';
import {VideoService} from '../../../../core/services/video.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ToastrService} from 'ngx-toastr';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-update-video',
  templateUrl: './update-video-modal.component.html',
  styleUrls: ['./update-video-modal.component.scss']
})
export class UpdateVideoModalComponent implements OnInit {
  selected = 'None';
  public formGroup: FormGroup;
  video: Video;
  file: File;
  topics: Topic[];
  id: string;
  defaultChapter;
  videoUrl;
  videoDuration = 0;
  fileName: string;

  constructor(private router: Router,
              private topicService: TopicService,
              private videoService: VideoService,
              private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              public dialogRef: MatDialogRef<UpdateVideoModalComponent>,
              @Inject(MAT_DIALOG_DATA) private modalData: any,
              private toastr: ToastrService,
              private sanitizer: DomSanitizer) {
    this.topicService.getAllTopics().subscribe(topics => {
      this.topics = topics;
      this.defaultChapter = modalData.chapter;
    });
  }

  ngOnInit() {

    this.initForm({} as Video);
    this.updateForm();
    this.route.params.subscribe(params => {
      this.id = params.id;
    });
  }

  updateForm() {
    this.formGroup = this.formBuilder.group({
      chapter: this.modalData.chapter,
      title: this.modalData.title,
      description: this.modalData.description,
      videoDuration: this.modalData.videoDuration,
      externalId: this.modalData.externalId,
      files: null
    });
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

  update() {

    this.video = this.formGroup.value as Video;
    if (this.videoDuration !== 0) {
      this.video.videoDuration = this.videoDuration.toString();
    }
    this.addTopicIdToVideo();
    this.videoService.update(this.video, this.file).subscribe(
      data => {
        this.toastr.success('Sa salvat cu succes');
        this.closeModal(true);
      },
      error => {
        this.toastr.error('A aparut o eroare');
      }
    );
  }


  initForm(video: Video) {
    this.formGroup = this.formBuilder.group({
      chapter: [video.chapter, [Validators.required, Validators.minLength(3)]],
      title: [video.title, [Validators.required, Validators.minLength(3)]],
      description: [video.description, [Validators.required, Validators.minLength(3)]],
      file: [video.file]
    });
  }

  cancel() {
    this.restoreForm(this.formGroup);
  }

  restoreForm(formGroup: FormGroup) {
    if (formGroup != null) {
      formGroup.reset();
      this.formGroup = this.formBuilder.group({
        chapter: '',
        description: '',
        title: '',
        file: null
      });
    }
  }

  addTopicIdToVideo() {
    this.topics.forEach(topic => {
      if (this.video.chapter === topic.name) {
        this.video.topicId = topic.externalId;
      }
    });
  }

  getDuration(e) {
    this.videoDuration = e.target.duration;
  }

  closeModal(response: boolean) {
    this.dialogRef.close(response);
  }
}
