import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {Subscription} from '../models/Subscription';
import {Account} from 'src/app/shared/models/account';
import {Topic} from '../../../shared/models/topic';
import {Video} from '../../../shared/models/video';
import {Observable} from 'rxjs';
import {ChangePassword} from '../../../shared/models/changePassword';
import {Message} from '../../../shared/models/message';
import {School} from '../../../shared/models/school';
import {Question} from '../../../shared/models/question';
import {QuestionFilter} from '../../../shared/models/questionFilter';
import {Course} from '../../../shared/models/course';
import {CourseFilter} from '../../../shared/models/courseFilter';
import {Quiz} from '../../../shared/models/quiz';
import {QuizValidation} from '../../../shared/models/quizValidation';

@Injectable()
export class CommonRepositoryService {

  constructor(private http: HttpClient) {
  }

  subscription(subscription: Subscription) {
    return this.http.post(`${environment.subscription}`, subscription);
  }

  subscriptionActivation(uid: string) {
    return this.http.post(`${environment.subscriptionActivation}`, uid);
  }

  unsubscription(uid: string) {
    return this.http.post(`${environment.unsubscription}`, uid);
  }

  createAccount(account: Account) {
    return this.http.post(`${environment.register}`, account);
  }

  getCurrentAccount(): Observable<Account> {
    return this.http.get<Account>(`${environment.account}`).pipe();
  }

  createTopic(topic: Topic) {
    return this.http.post(`${environment.topic}`, topic);
  }

  updateTopic(topic: Topic) {
    return this.http.put(`${environment.topic}`, topic);
  }

  getAll(): Observable<Topic[]> {
    return this.http.get<Topic[]>(`${environment.topic}`);
  }

  deleteTopic(externalId: string) {
    return this.http.delete(`${environment.topic}/` + externalId);
  }

  getVideosDetailsByTopicId(topicId: string): Observable<Video[]> {
    return this.http.get<Video[]>(`${environment.video}/` + topicId + `/byChapter`);
  }

  getVideosDetailsByCourseId(courseId: string): Observable<Video[]> {
    return this.http.get<Video[]>(`${environment.video}/byCourse/` + courseId);
  }

  createVideo(videoRequest) {
    return this.http.post(`${environment.video}`, videoRequest);
  }

  updateVideo(formData: FormData) {
    return this.http.post(`${environment.video}/update`, formData);
  }

  getVideoById(id: string) {
    return this.http.get<Video>(`${environment.video}/` + id + `/details`);
  }

  deleteVideo(id: string) {
    return this.http.delete(`${environment.video}/` + id);
  }

  changePassword(changePassword: ChangePassword) {
    return this.http.put(`${environment.changePassword}`, changePassword);
  }

  updateAccount(account: Account) {
    return this.http.put(`${environment.account}update`, account);
  }

  saveMessage(message: Message) {
    return this.http.post(`${environment.message}`, message);
  }

  createSchool(school: School) {
    return this.http.post(`${environment.school}`, school);
  }

  updateSchool(school: School) {
    return this.http.put(`${environment.school}`, school);
  }

  deleteSchool(externalId: string) {
    return this.http.delete(`${environment.school}` + externalId);
  }

  getAllSchools() {
    return this.http.get(`${environment.school}`);
  }

  createQuestion(question: Question) {
    return this.http.post(`${environment.question}`, question);
  }

  updateQuestion(question: Question) {
    return this.http.put(`${environment.question}`, question);
  }

  deleteQuestion(externalId: string) {
    return this.http.delete(`${environment.question}/` + externalId);
  }

  filterQuestion(questionFilter: QuestionFilter) {
    return this.http.post(`${environment.question}` + '/filter', questionFilter);
  }

  deleteCourse(externalId: string) {
    return this.http.delete(`${environment.course}` + externalId);
  }

  updateCourse(course: Course) {
    return this.http.put(`${environment.course}`, course);
  }

  createCourse(course: Course) {
    return this.http.post(`${environment.course}`, course);
  }

  courseFilter(courseFilter: CourseFilter) {
    return this.http.post(`${environment.course}filter`, courseFilter);
  }

  getCourseById(externalId: string): Observable<Course> {
    return this.http.get<Course>(`${environment.course}course/active/` + externalId);
  }

  getQuizzesByCourseId(externalId: string): Observable<Quiz[]> {
    return this.http.get<Quiz[]>(`${environment.quiz}active-quiz/course/` + externalId);
  }

  getAllActiveCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(`${environment.course}course/active`);
  }

  getAllCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(`${environment.course}course`);
  }

  createQuiz(quiz: Quiz) {
    return this.http.post(`${environment.quiz}`, quiz);
  }

  getQuizById(id: string): Observable<Quiz> {
    return this.http.get<Quiz>(`${environment.quiz}active-quiz/` + id);
  }

  getBestCourses() {
    return this.http.get<Course[]>(`${environment.course}course/best`).pipe();
  }

  makeReview(rating: number, courseExternalId: string, accountExternalId: string) {
    return this.http.post(`${environment.course}review`, {rating, courseExternalId, accountExternalId});
  }

  validateQuiz(quiz: QuizValidation) {
    return this.http.post<QuizValidation>(`${environment.quiz}validation`, quiz).pipe();
  }

  getValidationQuizByExternalId(externalId: string) {
    return this.http.get<QuizValidation>(`${environment.quiz}validation/` + externalId).pipe();
  }
}
