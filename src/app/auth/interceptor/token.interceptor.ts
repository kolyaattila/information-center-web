import {Injectable} from '@angular/core';
import {HttpRequest, HttpHandler, HttpEvent, HttpInterceptor} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthenticationService} from '../service/authentication.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private authenticationService: AuthenticationService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let currentUserToken = this.authenticationService.currentUserTokenValue;
    if (currentUserToken && currentUserToken.access_token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${currentUserToken.access_token}`
        }
      });
    }

    return next.handle(request);
  }
}
