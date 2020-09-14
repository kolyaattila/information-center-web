import {Topic} from './topic';
import {Rating} from './rating';

export class Course {
  name: string;
  author: string;
  created: string;
  price: string;
  externalId?: string;
  enable: boolean;
  rating?: Rating;
  description?: string;
  numberTopics?: number;
  numberQuizzes?: number;
  numberDocuments?: number;
  numberVideos?: number;
  numberStudents?: number;
  topics?: Topic[] = [];
  image?: string;
}
