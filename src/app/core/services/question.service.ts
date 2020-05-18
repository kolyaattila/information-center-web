import {Injectable} from '@angular/core';
import {CommonRepositoryService} from '../shared/service/common-repository.service';
import {Question} from '../../shared/models/question';
import {QuestionFilter} from '../../shared/models/questionFilter';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private repositoryService: CommonRepositoryService) {
  }

  createQuestion(question: Question) {
    return this.repositoryService.createQuestion(question);
  }

  updateQuestion(question: Question) {
    return this.repositoryService.updateQuestion(question);
  }

  deleteQuestion(externalId: string) {
    return this.repositoryService.deleteQuestion(externalId);
  }

  filterQuestion(questionFilter: QuestionFilter) {
    return this.repositoryService.filterQuestion(questionFilter);
  }
}
