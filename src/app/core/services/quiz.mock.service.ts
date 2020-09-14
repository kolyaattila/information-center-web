import {QuizValidation} from '../../shared/models/quizValidation';
import {Observable, of} from 'rxjs';

export class QuizMockService {

  getValidationQuiz(quizValidationExternalId: string): Observable<QuizValidation> {
    const quiz = new QuizValidation();
    quiz.questions = [];
    return of(quiz);
  }

}
