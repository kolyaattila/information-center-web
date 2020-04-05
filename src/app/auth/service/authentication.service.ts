import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {environment} from '../../../environments/environment';
import {Token} from '../../shared/models/token';
import {Router} from '@angular/router';

@Injectable({providedIn: 'root'})
export class AuthenticationService {

  constructor(private http: HttpClient,
              private router: Router) {
  }

  public get currentUserTokenValue(): Token {
    return JSON.parse(localStorage.getItem('currentUserToken'));
  }

  login(username: string, password: string) {
    var headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Basic YnJvd3Nlcjo='
    });

    return this.http.post<any>(`${environment.login}?grant_type=password&scope=ui&username=${username}&password=${password}`, {}, {headers: headers})
      .pipe(map(token => {
        localStorage.setItem('currentUserToken', JSON.stringify(token));
        return token;
      }));
  }

  logout() {
    localStorage.removeItem('currentUserToken');
    this.router.navigate(['auth/login']);
  }
}
