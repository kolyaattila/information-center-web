import {Injectable} from '@angular/core';
import {TopicService} from 'src/app/core/services/topic.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalActionsService {

  constructor(private topicService: TopicService) {
  }

  modalAction(modalData: any): Observable<any> {
    switch (modalData.name) {
      case 'deleteTopic':
        return this.deleteTopic(modalData);
        break;

      default:
        break;
    }
  }

  private deleteTopic(modalData: any) {
    return this.topicService.deleteTopic(modalData.topicId);
  }
}
