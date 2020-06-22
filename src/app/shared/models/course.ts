import {Topic} from './topic';

export class Course {
  name: string;
  author: string;
  created: string;
  price: string;
  externalId?: string;
  enable: boolean;
  rating?: any;
  description?: string;
  numberTopics?: number;
  numberQuizzes?: number;
  numberDocuments?: number;
  numberVideos?: number;
  numberStudents?: number;
  topics?: Topic[];
  image?: string;
}
