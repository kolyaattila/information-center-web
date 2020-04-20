import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';

import {environment} from '../../../environments/environment';
import {Token} from '../../shared/models/token';
import {Router} from '@angular/router';

@Injectable({providedIn: 'root'})
export class AuthenticationService {

  constructor(private http: HttpClient,
              private router: Router) {
  }

  public isLogin() {
    return !!this.currentUserTokenValue;
  }

  public get currentUserTokenValue(): Token {
    return localStorage.getItem('currentUserToken') === '' ? null : JSON.parse(localStorage.getItem('currentUserToken'));
  }

  login(username: string, password: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Basic YnJvd3Nlcjo='
    });
    const params = {
      grant_type: 'password',
      scope: 'ui',
      username,
      password
    };

    const options = {
      headers,
      params
    };

    return this.http.post<any>(`${environment.login}`, {}, options)
      .pipe(map(token => {
        return this.setToken(token);
      }));
  }

  logout() {
    localStorage.removeItem('currentUserToken');
    this.router.navigate(['/login']);
  }


  setToken(token: any) {
    const expire = token.expires_in;
    const date = new Date() + expire;
    token.date = date;

    localStorage.setItem('currentUserToken', JSON.stringify(token));
    return token;
  }

  isTokenExpired() {
    if (this.currentUserTokenValue) {
      const date = new Date(this.currentUserTokenValue.date);
      const difference = (date.getTime() - new Date().getTime() / 1000);
      return difference < 0;
    }
    return true;
  }
}
