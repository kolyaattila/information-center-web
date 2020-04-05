import {Injectable} from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';

import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {AuthenticationService} from '../service/authentication.service';


@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(private authService: AuthenticationService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error) => {
        let data = {};
        data = {
          reason: error.message,
          status: error.status
        };

        switch (data[`status`]) {
          case 401: {
            this.authService.logout();
            return throwError(error);
          }
        }
        return throwError(error);
      }));
  }
}
