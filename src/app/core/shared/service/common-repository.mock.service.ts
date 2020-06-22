import {Subscription} from '../models/Subscription';
import {Account} from '../../../shared/models/account';
import {Topic} from '../../../shared/models/topic';
import {Observable, of} from 'rxjs';
import {ChangePassword} from '../../../shared/models/changePassword';
import {Message} from '../../../shared/models/message';
import {Video} from '../../../shared/models/video';
import {School} from '../../../shared/models/school';
import {Question} from '../../../shared/models/question';
import {Course} from '../../../shared/models/course';
import {CourseFilter} from '../../../shared/models/courseFilter';
import {Quiz} from '../../../shared/models/quiz';
import {QuizValidation} from '../../../shared/models/quizValidation';

export class CommonRepositoryMockService {

  subscription(subscription: Subscription) {
    return of(subscription);
  }

  subscriptionActivation(uid: string) {
    return of(uid);
  }

  unsubscription(uid: string) {
    return of(uid);
  }

  createAccount(account: Account) {
    return of(account);
  }

  getCurrentAccount(): Observable<Account> {
    return of(new Account());
  }

  createTopic(topic: Topic) {
    return of(topic);
  }

  updateTopic(topic: Topic) {
    return of(topic);
  }

  getAll(): Observable<Topic[]> {
    const topic = [new Topic(), new Topic()];
    return of(topic);
  }

  getVideosDetailsByTopicId(topicId: string): Observable<Video[]> {
    const video1 = new Video();
    video1.description = 'description';

    const video = [video1];
    return of(video);
  }

  save(video: Video, file: File) {
    return of(video);
  }

  getById(id: string) {
    return of(new Video());
  }

  deleteVideo(id: string) {
    return of(new Video());
  }

  update(id: string) {
    return of(new Video());
  }

  deleteTopic(externalId: string) {
    return of(externalId);
  }

  changePassword(changePassword: ChangePassword) {
    return of(changePassword);
  }

  updateAccount(account: Account) {
    return of(account);
  }

  saveMessage(message: Message) {
    return of(message);
  }

  getAllSchools(): Observable<School[]> {
    const schools = [new School(), new School()];
    return of(schools);
  }

  filterQuestion(): Observable<Question[]> {
    const questions = [new Question(), new Question()];
    return of(questions);
  }

  deleteCourse(externalId: string) {
    return of(externalId);
  }

  updateCourse(course: Course) {
    return of(course);
  }

  createCourse(course: Course) {
    return of(course);
  }

  courseFilter(courseFilter: CourseFilter) {
    return of(courseFilter);
  }

  getCourseById(externalId: string): Observable<Course> {
    return of(new Course());
  }

  getQuizzesByCourseId(externalId: string): Observable<Quiz[]> {
    return of([new Quiz()]);
  }

  getAllActiveCourses(): Observable<Course[]> {
    return of(new Course()[1]);
  }

  getAllCourses(): Observable<Course[]> {
    return of(new Course()[1]);
  }

  createQuiz(quiz: Quiz) {
    return of(quiz);
  }

  getQuizById(id: string): Observable<Quiz> {
    return of(new Quiz());
  }

  getBestCourses() {
    return of(new Course()[1]);
  }

  makeReview(rating: number, courseExternalId: string, accountExternalId: string) {
    return of(rating);
  }

  validateQuiz(quiz: QuizValidation) {
    return of(quiz);
  }

  getValidationQuizByExternalId(externalId: string) {
    return of(new QuizValidation());
  }

  getMyQuizzes(accountUid: string): Observable<any> {
    return of(accountUid);
  }
}
