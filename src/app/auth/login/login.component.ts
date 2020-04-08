import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../service/authentication.service';
import {first} from 'rxjs/operators';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  returnUrl: string;
  error;
  loginForm = new FormGroup({
    username: new FormControl('', {
      validators: [
        Validators.required,
        Validators.minLength(3)
      ]
    }),
    password: new FormControl('', {
      validators: [
        Validators.required,
        Validators.minLength(7)
      ]
    })
  });

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authenticationService: AuthenticationService,
    private toastr: ToastrService) {
    if (this.authenticationService.currentUserTokenValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  onSubmit() {

    if (this.loginForm.invalid) {
      return;
    }

    this.authenticationService.login(this.loginForm.value.username, this.loginForm.value.password)
      .pipe(first()).subscribe(data => {
      this.router.navigate([this.returnUrl]);
    }, httpErrorResponse => {
      this.error = httpErrorResponse;
      this.handleError(httpErrorResponse);
    });
  }

  handleError(httpErrorResponse) {
    if (httpErrorResponse && httpErrorResponse.status === 400 && httpErrorResponse.error.error_description === 'Bad credentials') {
      this.toastr.error('Numele de utilizator sau parola sunt gresite.');
    } else if (httpErrorResponse && httpErrorResponse.status === 503) {
      this.toastr.error('Serviciul nu este disponibil momentan');
    } else {
      this.toastr.error('A aparut ceva eroare.');
    }
  }

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

}
