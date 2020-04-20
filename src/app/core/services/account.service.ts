import {Injectable} from '@angular/core';
import {CommonRepositoryService} from '../shared/service/common-repository.service';
import {Account} from 'src/app/shared/models/account';
import {ChangePassword} from '../../shared/models/changePassword';


@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private repositoryService: CommonRepositoryService) {
  }

  createAccount(account: Account) {
    return this.repositoryService.createAccount(account);
  }

  getCurrentAccount(): Promise<Account> {
    return this.repositoryService.getCurrentAccount();
  }

  changePassword(changePassword: ChangePassword) {
    return this.repositoryService.changePassword(changePassword);
  }

  updateAccount(account: Account) {
    return this.repositoryService.updateAccount(account);
  }

}
