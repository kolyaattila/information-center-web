import {Injectable} from '@angular/core';
import {CommonRepositoryService} from '../shared/service/common-repository.service';
import {Topic} from 'src/app/shared/models/topic';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  constructor(private repositoryService: CommonRepositoryService) {
  }

  getAllTopics(): Observable<Topic[]> {
    return this.repositoryService.getAll();
  }

  saveTopic(topic: Topic) {
    return this.repositoryService.createTopic(topic);
  }

  updateTopic(topic: Topic) {
    return this.repositoryService.updateTopic(topic);
  }

  deleteTopic(externalId: string) {
    return this.repositoryService.deleteTopic(externalId);
  }
}
