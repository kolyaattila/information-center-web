import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {CommonRepositoryService} from '../shared/service/common-repository.service';
import {Video} from '../../shared/models/video'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class  VideoService {

  constructor(private repositoryService: CommonRepositoryService) {
  }
  getVideosDetailsByTopic(topic:string):Observable<Video[]>{
      return this.repositoryService.getVideosDetailsByTopic(topic);
  }
}
