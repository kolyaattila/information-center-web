import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../auth/service/authentication.service';
import {AccountService} from '../core/services/account.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})

export class PagesComponent implements OnInit {
  isOpen: boolean;
  currentAccount;

  constructor(private authenticationService: AuthenticationService,
              private accountService: AccountService) {
  }

  ngOnInit(): void {
    this.isOpen = false;
    this.accountService.getCurrentAccount()
      .then(value => this.currentAccount = value);
  }

  onCloseNav(): void {
    this.isOpen = false;
  }

  onSwitchNav() {
    this.isOpen = !this.isOpen;
  }

  logout() {
    this.authenticationService.logout();
  }
}
