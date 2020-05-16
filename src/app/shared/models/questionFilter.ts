import {QuestionDifficulty} from './QuestionDifficulty';

export class QuestionFilter {
  name?: string;
  questionNumber?: number;
  questionDifficulty?: QuestionDifficulty;
  chapterExternalId?: string;
  courseExternalId?: string;
  externalId?: string;
  book?: string;
  verified?: boolean;
  pageNumber?: number;
  pageSize?: number;
}
