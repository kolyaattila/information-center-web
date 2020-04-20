import { Component, OnInit,EventEmitter,Output ,Input,ViewChild, ElementRef, AfterViewInit, AfterViewChecked} from '@angular/core';
import {Video} from 'src/app/shared/models/video';
import { Router,ActivatedRoute } from '@angular/router';
import {VideoService} from 'src/app/core/services/video.service'
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit,AfterViewInit {
   @ViewChild('video',{static:true}) video;
  videosDetails : Video[];
  videoExternalId : string;
  path :string;
  id:string;
  topicName :string;
  constructor(private router: Router,
              private service : VideoService,
              private elRef: ElementRef,
              private route: ActivatedRoute) { 
              this.service = service;
              this.elRef = elRef;
     }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.getVideosDetailsByTopic(this.id);
   });
  }
  ngAfterViewInit() {            
    
      this.video.nativeElement.focus();
    }

  changeVideo(video:Video){
    this.videoExternalId = video.externalId;
    this.changePath();
    this.refreshVideoTag();
  }

  getChapterName(){
    if(this.videosDetails != undefined)
    if(this.videosDetails.length!= 0)
    this.topicName = this.videosDetails[0].chapter;
  }

  changePath(){
    
    this.path = environment.video+"/"+this.videoExternalId;
  }

  refreshVideoTag(){  
    const player = this.elRef.nativeElement.querySelector('video');
    player.load();
  }

  redirectUpdate(){
    this.router.navigate(['lesson/update-video/'+this.videoExternalId]);
  }

  getVideosDetailsByTopic(id:string){
    this.service.getVideosDetailsByTopic(id).subscribe(videoDetails=>{
      this.videosDetails = videoDetails;
      if(videoDetails[0] != undefined)
      this.videoExternalId = videoDetails[0].externalId;
      this.changePath();    
      this.refreshVideoTag();
      this.getChapterName();
    })
  }
}
