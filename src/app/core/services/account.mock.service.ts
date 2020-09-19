import {Account} from '../../shared/models/account';
import {of} from 'rxjs';

export class AccountMockService {
  getCurrentAccount() {
    return of(new Account());
  }
}
