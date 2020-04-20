import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../auth/service/authentication.service';
import {AccountService} from '../core/services/account.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})

export class PagesComponent implements OnInit {
  currentAccount;

  constructor(private authenticationService: AuthenticationService,
              private accountService: AccountService) {
  }

  ngOnInit(): void {
    if (this.isLogin()) {
      this.accountService.getCurrentAccount()
        .then(value => this.currentAccount = value);
    }
  }

  isLogin() {
    return this.authenticationService.isLogin();
  }

  logout() {
    this.authenticationService.logout();
  }
}
