import {Injectable} from '@angular/core';
import {CommonRepositoryService} from '../shared/service/common-repository.service';
import {Account} from 'src/app/shared/models/account';
import {ChangePassword} from '../../shared/models/changePassword';
import {Observable, of} from 'rxjs';
import {switchMap} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private repositoryService: CommonRepositoryService) {
  }


  private observableCache: Observable<Account>;
  private currentAccountCache: Account;

  createAccount(account: Account) {
    return this.repositoryService.createAccount(account);
  }

  getCurrentAccount() {
    if (this.currentAccountCache) {
      return of<Account>(this.currentAccountCache);
    } else if (this.observableCache) {
      return this.observableCache;
    } else {
      this.observableCache = this.getAccount();
    }

    return this.observableCache;
  }

  getAccount() {
    return this.repositoryService.getCurrentAccount()
      .pipe(
        switchMap(
          response => {
            this.currentAccountCache = response;
            return of<Account>(response);
          }
        )
      );
  }

  changePassword(changePassword: ChangePassword) {
    return this.repositoryService.changePassword(changePassword);
  }

  updateAccount(account: Account) {
    return this.repositoryService.updateAccount(account);
  }

  invalidCache() {
    this.currentAccountCache = undefined;
  }
}
