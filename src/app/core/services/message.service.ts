import {Injectable} from '@angular/core';
import {CommonRepositoryService} from '../shared/service/common-repository.service';
import {Message} from '../../shared/models/message';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private repositoryService: CommonRepositoryService) {
  }

  saveMessage(message: Message) {
    return this.repositoryService.saveMessage(message);
  }

}
