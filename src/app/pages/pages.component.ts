import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../auth/service/authentication.service';
import {AccountService} from '../core/services/account.service';
import {CourseService} from '../core/services/course.service';
import {Course} from '../shared/models/course';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})

export class PagesComponent implements OnInit {
  currentAccount;
  bestCourses: Course[] = [];

  constructor(private authenticationService: AuthenticationService,
              private accountService: AccountService,
              private courseService: CourseService) {
  }

  ngOnInit(): void {
    if (this.isLogin()) {
      this.accountService.getCurrentAccount()
        .subscribe(value => this.currentAccount = value);
    }
    this.courseService.getBestCourses().subscribe(data => this.bestCourses = data);
  }

  isLogin() {
    return this.authenticationService.isLogin();
  }

  logout() {
    this.authenticationService.logout();
  }
}
