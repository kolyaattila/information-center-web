import {Injectable} from '@angular/core';
import {CommonRepositoryService} from '../shared/service/common-repository.service';
import {Quiz} from '../../shared/models/quiz';
import {QuizValidation} from '../../shared/models/quizValidation';
import {Observable, of} from 'rxjs';
import {switchMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private repositoryService: CommonRepositoryService) {
  }

  private resultQuizValidation: QuizValidation[] = [];
  private observableQuizValidation: Observable<QuizValidation>;

  getQuizzesByCourseId(externalId: string) {
    return this.repositoryService.getQuizzesByCourseId(externalId);
  }

  createQuiz(quiz: Quiz) {
    return this.repositoryService.createQuiz(quiz);
  }

  getQuizById(id: string) {
    return this.repositoryService.getQuizById(id);
  }

  validateQuiz(quiz: QuizValidation) {
    return this.repositoryService.validateQuiz(quiz)
      .pipe(
        switchMap(
          response => {
            this.resultQuizValidation.push(response);
            return of<QuizValidation>(response);
          }
        )
      );
  }

  getValidationQuiz(quizValidationExternalId: string): Observable<QuizValidation> {
    if (this.containsQuizValidationExternalId(quizValidationExternalId)) {
      return of(this.getQuizValidationForCache(quizValidationExternalId));
    } else if (this.observableQuizValidation) {
      return this.observableQuizValidation;
    } else {
      this.observableQuizValidation = this.getValidationQuizByExternalId(quizValidationExternalId);
    }
    return this.observableQuizValidation;
  }

  private getValidationQuizByExternalId(externalId: string): Observable<QuizValidation> {
    return this.repositoryService.getValidationQuizByExternalId(externalId)
      .pipe(
        switchMap(
          response => {
            this.resultQuizValidation.push(response);
            return of<QuizValidation>(response);
          }
        )
      );
  }

  private containsQuizValidationExternalId(externalId: string) {
    let contains = false;
    this.resultQuizValidation.forEach(quiz => {
      if (quiz.externalId === externalId) {
        contains = true;
      }
    });
    return contains;
  }

  private getQuizValidationForCache(externalId: string) {
    let object = null;
    this.resultQuizValidation.forEach(quiz => {
      if (quiz.externalId === externalId) {
        object = quiz;
      }
    });
    return object;
  }

  getMyQuizzes(accountUid: string) {
    return this.repositoryService.getMyQuizzes(accountUid);
  }

}
