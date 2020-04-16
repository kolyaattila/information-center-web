import { Component, OnInit,EventEmitter,Output ,Input,ElementRef } from '@angular/core';
import {Video} from 'src/app/shared/models/video';
import { Router,ActivatedRoute } from '@angular/router';
import {VideoService} from 'src/app/core/services/video.service'
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {

  

  videosDetails : Video[];
  videoExternalId : string;
  path :string;
  id:string;
  constructor(private router: Router,private service : VideoService,private elRef: ElementRef,private route: ActivatedRoute) { 
    this.service = service;
    this.elRef = elRef;
     }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id']; // (+) converts string 'id' to a number
      // In a real app: dispatch action to load the details here.
      console.log(this.id)
      this.getVideosDetailsByTopic(this.id);
   });
  }

  changeVideo(video:Video){
    this.videoExternalId = video.externalId;
    this.changePath();
    this.refreshVideoTag();
  }

  changePath(){
    
    this.path = environment.video+"/"+this.videoExternalId;
    console.log(this.path)
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
      console.log(videoDetails)
      this.changePath();    
      this.refreshVideoTag();
      console.log("aici")
      console.log(this.path)
    })
  }
}
