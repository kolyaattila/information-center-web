import {Component, ElementRef, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Video} from 'src/app/shared/models/video';
import {ActivatedRoute, Router} from '@angular/router';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {UpdateVideoComponent} from '../update-video/update-video.component';
import {VideoService} from '../../../../core/services/video.service';
import {ConfirmationModalComponent} from '../../../../shared/modal/confirmation-modal/confirmation-modat.component';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent implements OnInit {

  @Input() videosDetails: Video[];

  @Output() changeCurrentVideo = new EventEmitter<Video>();
  @Output() refresh = new EventEmitter<any>();

  constructor(private router: Router,
              private service: VideoService,
              private elRef: ElementRef,
              private route: ActivatedRoute,
              private matDialog: MatDialog) {
  }

  ngOnInit() {
  }

  changeVideo(video: Video) {
    this.changeCurrentVideo.emit(video);
  }

  openDeleteVideoModal(video: Video) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.id = 'confirmation-modal';
    dialogConfig.height = '300px';
    dialogConfig.width = '500px';

    dialogConfig.data = {
      name: 'deleteVideo',
      title: 'Sunteti sigur ca doriti sa stergeti acest video?',
      description: 'Daca veti continua video-ul: ' + video.title + ' va fi sters.',
      actionButtonText: 'Sterge',
      topicId: video.externalId
    };

    const modalDialog = this.matDialog.open(ConfirmationModalComponent, dialogConfig);
    modalDialog.afterClosed().subscribe(result => {
      if (result) {
        this.refresh.emit(null);
      }
    });
  }

  openUpdateVideoModel(video: Video) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.id = 'update-video-modal';
    dialogConfig.height = '600px';
    dialogConfig.width = '500px';
    dialogConfig.data = video;

    const modalDialog = this.matDialog.open(UpdateVideoComponent, dialogConfig);
    modalDialog.afterClosed().subscribe(result => {
      if (result) {
        this.refresh.emit(null);
      }
    });
  }
}
