import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {AuthenticationService} from '../service/authentication.service';
import {ToastrService} from 'ngx-toastr';


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
        if (error && !this.authService.isLogin()) {
          return throwError(error);
        }

        switch (data[`status`]) {
          case 503: {
            this.toastr.error('Service nu este disponibil momentan');
            if (this.authService.isLogin()) {
              this.authService.logout();
            }
            return throwError(error);
          }
        }
        return throwError(error);
      }));
  }
}
