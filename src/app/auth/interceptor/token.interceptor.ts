import {Injectable} from '@angular/core';
import {HttpClient, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {AuthenticationService} from '../service/authentication.service';
import {filter, switchMap, take} from 'rxjs/operators';
import {environment} from '../../../environments/environment';
import {Token} from '../../shared/models/token';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  private refreshTokenInProgress = false;
  private refreshTokenSubject: Subject<any> = new BehaviorSubject<any>(null);

  constructor(private authenticationService: AuthenticationService,
              private http: HttpClient) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.url.includes(`${environment.login}`)) {
      return next.handle(request);
    }

    if (!this.authenticationService.isTokenExpired()) {
      return next.handle(this.injectToken(request));
    }

    if (!this.authenticationService.currentUserTokenValue) {
      return next.handle(request);
    }

    if (!this.refreshTokenInProgress) {
      this.refreshTokenInProgress = true;
      this.refreshTokenSubject.next(null);
      const options = this.getOptionsRequest(this.authenticationService.currentUserTokenValue);
      return this.http.post(`${environment.login}`, {}, options).pipe(
        switchMap((authResponse: Token) => {
          this.authenticationService.setToken(authResponse);
          this.refreshTokenInProgress = false;
          this.refreshTokenSubject.next(authResponse.refresh_token);
          return next.handle(this.injectToken(request));
        }),
      );
    } else {
      return this.refreshTokenSubject.pipe(
        filter(result => result !== null),
        take(1),
        switchMap((res) => {
          return next.handle(this.injectToken(request));
        })
      );
    }
  }

  injectToken(request: HttpRequest<any>) {
    const token = this.authenticationService.currentUserTokenValue;
    return request.clone({
      setHeaders: {
        Authorization: `Bearer ${token.access_token}`
      }
    });
  }

  private getOptionsRequest(currentUserToken: Token) {
    const params = {
      grant_type: 'refresh_token',
      refresh_token: currentUserToken.refresh_token
    };
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Basic YnJvd3Nlcjo='
    });

    return {
      headers,
      params
    };
  }
}
