import { Component, OnInit,EventEmitter,Output ,Input } from '@angular/core';
import {Video} from 'src/app/shared/models/video';
import { Router } from '@angular/router';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent implements OnInit {

  @Input() videosDetails:Video[];

  @Output() change = new EventEmitter<Video>();

  constructor(private router :Router) {}

  ngOnInit() {
  }

  changeVideo(video:Video){
    this.change.emit(video);
  }

  redirectUpdate(){
    this.router.navigate(['lesson/video/update-video/'+1]);
  }
}
