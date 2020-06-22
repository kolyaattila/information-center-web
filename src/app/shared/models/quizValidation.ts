import {Question} from './question';

export class QuizValidation {
  questions: Question[];
  quizExternalId: string;
  userExternalId: string;
  externalId: string;
  note: number;
  passed: boolean;
  courseExternalId: string;
}
