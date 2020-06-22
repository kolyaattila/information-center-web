import {Answer} from './answer';
import {QuestionDifficulty} from './QuestionDifficulty';

export class Question {
  questionNumber: number;
  points?: number;
  name: string;
  questionDifficulty: QuestionDifficulty;
  book: string;
  chapter: string;
  courseExternalId: string;
  topicExternalId: string;
  externalId: string;
  school: string;
  answers?: Answer[];
  verified: boolean;
}
