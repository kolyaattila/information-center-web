import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {Subscription} from '../models/Subscription';
import {Account} from 'src/app/shared/models/account';
import {Topic} from '../../../shared/models/topic';
import {Video} from '../../../shared/models/video'
import {Observable} from 'rxjs';

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

  getCurrentAccount(): Promise<Account> {
    return this.http.get<Account>(`${environment.currentAccount}`).toPromise();
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
  getVideosDetailsByTopicId(topicId: string){
    return this.http.get<Video[]>(`${environment.video}/`+topicId+`/byChapter`);
  }
}
