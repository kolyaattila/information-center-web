import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../../auth/service/authentication.service';
import {ToastrService} from 'ngx-toastr';
import {Account} from '../../shared/models/account';
import {AccountService} from '../../core/services/account.service';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.scss']
})
export class LoginRegisterComponent implements OnInit, AfterViewInit {
  @ViewChild('banerImg', {static: false}) bannerImg: ElementRef;
  returnUrl: string;
  error: any;
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

  registrationForm = new FormGroup({
    firstName: new FormControl('', {
      validators: [
        Validators.required,
        Validators.minLength(3)
      ]
    }),
    lastName: new FormControl('', {
      validators: [
        Validators.required,
        Validators.minLength(3)
      ]
    }),
    email: new FormControl('', {
      validators: [
        Validators.required,
        Validators.email
      ]
    }),
    confirmPassword: new FormControl('', {
      validators: [
        Validators.required,
        Validators.pattern(/^(?=\D*\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}$/)
      ]
    }),
    password: new FormControl('', {
      validators: [
        Validators.required,
        Validators.pattern(/^(?=\D*\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}$/)
      ]
    })
  });


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authenticationService: AuthenticationService,
    private toastr: ToastrService,
    private accountService: AccountService) {
    if (this.authenticationService.isLogin()) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
  }

  ngAfterViewInit(): void {
  }

  login() {
    if (this.loginForm.invalid) {
      return;
    }

    this.authenticationService.login(this.loginForm.value.username, this.loginForm.value.password)
      .pipe(first()).subscribe(data => {
      this.router.navigate([this.returnUrl]);
    }, httpErrorResponse => {
      this.error = httpErrorResponse;
      this.loginHandleError(httpErrorResponse);
    });
  }

  register() {
    if (this.isFormValid()) {
      const account: Account = new Account();
      account.password = this.registerPassword.value;
      account.username = this.registerEmail.value;
      account.firstName = this.registerFirstName.value;
      account.lastName = this.registerLastName.value;

      this.accountService.createAccount(account).subscribe(
        data => {
          this.toastr.success('Cont creat!');
        },
        error => {
          this.registerHandleError(error);
        }
      );
    }
  }

  isFormValid(): boolean {
    return this.registrationForm.valid &&
      this.registerPassword.value === this.registerConfirmPassword.value;
  }


  loginHandleError(httpErrorResponse) {
    if (httpErrorResponse && httpErrorResponse.status === 400 && httpErrorResponse.error.error_description === 'Bad credentials') {
      this.toastr.error('Numele de utilizator sau parola sunt gresite.');
    } else if (httpErrorResponse && httpErrorResponse.status === 503) {
      this.toastr.error('Serviciul nu este disponibil momentan');
    } else {
      this.toastr.error('A aparut ceva eroare.');
    }
  }

  registerHandleError(httpErrorResponse) {
    if (httpErrorResponse && httpErrorResponse.status === 400) {
      this.toastr.error(httpErrorResponse.error.message);
    } else if (httpErrorResponse && httpErrorResponse.status === 503) {
      this.toastr.error('Serviciul nu este disponibil momentan');
    } else {
      this.toastr.error('A aparut ceva eroare.');
    }
  }

  get loginUsername() {
    return this.loginForm.get('username');
  }

  get loginPassword() {
    return this.loginForm.get('password');
  }

  get registerConfirmPassword() {
    return this.registrationForm.get('confirmPassword');
  }

  get registerFirstName() {
    return this.registrationForm.get('firstName');
  }

  get registerEmail() {
    return this.registrationForm.get('email');
  }

  get registerPassword() {
    return this.registrationForm.get('password');
  }

  get registerLastName() {
    return this.registrationForm.get('lastName');
  }

}
