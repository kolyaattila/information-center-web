import {Answer} from './answer';
import {QuestionDifficulty} from './QuestionDifficulty';

export class Question {
  questionNumber: number;
  points?: number;
  name: string;
  questionDifficulty: QuestionDifficulty;
  book: string;
  chapter: string;
  course: string;
  externalId: string;
  school: string;
  answers?: Answer[];
  verified: boolean;
}
