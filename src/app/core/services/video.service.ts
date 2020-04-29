import {Injectable} from '@angular/core';
import {CommonRepositoryService} from '../shared/service/common-repository.service';
import {Video} from '../../shared/models/video';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor(private repositoryService: CommonRepositoryService) {
  }

  getVideosDetailsByTopicId(topicId: string): Observable<Video[]> {
    return this.repositoryService.getVideosDetailsByTopicId(topicId);
  }

  save(video: Video, file: File) {
    return this.repositoryService.createVideo(this.toFormData(video, file));
  }

  getById(id: string) {
    return this.repositoryService.getVideoById(id);
  }

  deleteVideo(id: string) {
    return this.repositoryService.deleteVideo(id);
  }

  update(video: Video, file: File) {
    return this.repositoryService.updateVideo(this.toFormData(video, file));
  }

  toFormData(video: Video, file: File) {
    const form = new FormData();

    form.append('chapter', video.chapter.toString());
    form.append('topicId', video.topicId.toString());
    form.append('title', video.title.toString());
    form.append('description', video.description.toString());
    form.append('videoDuration', video.videoDuration.toString());
    if (file !== undefined) {
      form.append('file', file);
    }
    if (video.externalId !== undefined) {
      form.append('externalId', video.externalId.toString());
    }
    return form;
  }
}
