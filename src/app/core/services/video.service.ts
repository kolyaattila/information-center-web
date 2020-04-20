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
  getVideosDetailsByTopic(topicId:string):Observable<Video[]>{
      return this.repositoryService.getVideosDetailsByTopicId(topicId);
  }
}
