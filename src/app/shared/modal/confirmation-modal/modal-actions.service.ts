import {Injectable} from '@angular/core';
import {TopicService} from 'src/app/core/services/topic.service';
import {Observable} from 'rxjs';
import {VideoService} from '../../../core/services/video.service';

@Injectable({
  providedIn: 'root'
})
export class ModalActionsService {

  constructor(private topicService: TopicService,
              private videoService: VideoService) {
  }

  modalAction(modalData: any): Observable<any> {
    switch (modalData.name) {
      case 'deleteTopic':
        return this.deleteTopic(modalData);
        break;
      case 'deleteVideo':
        return this.deleteVideo(modalData);
        break;
      default:
        break;
    }
  }

  private deleteTopic(modalData: any) {
    return this.topicService.deleteTopic(modalData.topicId);
  }

  private deleteVideo(modalData: any) {
    return this.videoService.deleteVideo(modalData.topicId);
  }
}
