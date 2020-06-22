import {Question} from './question';

export class Quiz {
  chapterExternalId: string;
  courseExternalId: string;
  externalId: string;
  description: string;
  enable: boolean;
  questions: Question[];
  questionIds?: string[] = [];
  type?: string;
}
