import {Injectable} from '@angular/core';
import {CommonRepositoryService} from '../shared/service/common-repository.service';
import {Quiz} from '../../shared/models/quiz';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private repositoryService: CommonRepositoryService) {
  }

  getQuizzesByCourseId(externalId: string) {
    return this.repositoryService.getQuizzesByCourseId(externalId);
  }

  createQuiz(quiz: Quiz) {
    return this.repositoryService.createQuiz(quiz);
  }

  getQuizById(id: string) {
    return this.repositoryService.getQuizById(id);
  }
}
