import {Subscription} from '../models/Subscription';
import {Account} from '../../../shared/models/account';
import {Topic} from '../../../shared/models/topic';
import {Observable, of} from 'rxjs';
import {ChangePassword} from '../../../shared/models/changePassword';
import {Message} from '../../../shared/models/message';
import {Video} from '../../../shared/models/video';
import {School} from '../../../shared/models/school';
import {Question} from '../../../shared/models/question';

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

  getCurrentAccount(): Promise<Account> {
    return of(new Account()).toPromise();
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
    const video = [new Video(), new Video()];
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
}
