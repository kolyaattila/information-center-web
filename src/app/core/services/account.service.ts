import {Injectable} from '@angular/core';
import {CommonRepositoryService} from '../shared/service/common-repository.service';
import {Account} from 'src/app/shared/models/account';


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
}
