import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Video} from 'src/app/shared/models/video';
import {ActivatedRoute, Router} from '@angular/router';
import {VideoService} from 'src/app/core/services/video.service';
import {environment} from '../../../../environments/environment';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {CreateVideoModalComponent} from './create-video-modal/create-video-modal.component';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit, AfterViewInit {
  @ViewChild('video', {static: true}) video;
  videosDetails: Video[];
  videoExternalId: string;
  videoTitle: string;
  path: string;
  id: string;
  topicName: string;
  videoDescription: string;

  constructor(private router: Router,
              private service: VideoService,
              private elRef: ElementRef,
              private route: ActivatedRoute,
              private matDialog: MatDialog) {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.getVideosDetailsByTopic(params.id);
    });
  }

  ngOnInit() {
  }

  openCreateVideoModel() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.id = 'add-video-modal';
    dialogConfig.height = '600px';
    dialogConfig.width = '500px';

    const modalDialog = this.matDialog.open(CreateVideoModalComponent, dialogConfig);
    modalDialog.afterClosed().subscribe(result => {
      if (result) {
        this.populateVideo();
      }
    });
  }

  ngAfterViewInit() {

    this.video.nativeElement.focus();
  }

  changeVideo(video: Video) {
    this.videoExternalId = video.externalId;
    this.videoTitle = video.title;
    this.changePath();
    this.refreshVideoTag();
  }

  getChapterName() {
    if (this.videosDetails !== undefined) {
      if (this.videosDetails.length !== 0) {
        this.topicName = this.videosDetails[0].topic;
      }
    }
  }

  changePath() {
    if (this.videoExternalId !== undefined || true) {
      this.path = environment.video + '/' + this.videoExternalId;
    }
  }

  refreshVideoTag() {
    const player = this.elRef.nativeElement.querySelector('video');
    if (player != null) {
      player.load();
    }
  }

  getVideosDetailsByTopic(id: string) {
    this.service.getVideosDetailsByTopicId(id).subscribe(videoDetails => {
      this.videosDetails = videoDetails;
      if (videoDetails[0] !== undefined) {
        this.videoExternalId = videoDetails[0].externalId;
        this.videoTitle = videoDetails[0].title;
        this.videoDescription = videoDetails[0].description;
      }
      this.changePath();
      this.refreshVideoTag();
      this.getChapterName();
    });
  }

  populateVideo() {
    this.videoTitle = '';
    this.topicName = '';
    this.getVideosDetailsByTopic(this.id);
  }
}
