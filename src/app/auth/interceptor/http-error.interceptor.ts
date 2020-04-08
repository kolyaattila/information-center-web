import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest,} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {AuthenticationService} from '../service/authentication.service';
import {ToastrService} from 'ngx-toastr';
import {environment} from 'src/environments/environment';


@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(private authService: AuthenticationService,
              private toastr: ToastrService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error) => {
        let data = {};
        data = {
          reason: error.message,
          status: error.status
        };
        if (error && (error.url === `${environment.register}` || error.url.includes(`${environment.login}`)) && error.status === 503) {
          return throwError(error);
        }

        switch (data[`status`]) {
          case 401: {
            this.authService.logout();
            return throwError(error);
          }
          case 503: {
            this.toastr.error('Service nu este disponibil momentan');
            this.authService.logout();
            return throwError(error);
          }
        }
        return throwError(error);
      }));
  }
}
