import {Subscription} from '../models/Subscription';
import {Account} from '../../../shared/models/account';
import {Topic} from '../../../shared/models/topic';
import {Observable, of} from 'rxjs';
import {ChangePassword} from '../../../shared/models/changePassword';
import {Message} from '../../../shared/models/message';

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

}
