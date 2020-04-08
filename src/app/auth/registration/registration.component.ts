import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AccountService} from 'src/app/core/services/account.service';
import {Account} from 'src/app/shared/models/account';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor(private accountService: AccountService,
              private router: Router,
              private toastr: ToastrService) {

  }

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

  ngOnInit() {
  }

  onSubmit() {
    if (this.isFormValid()) {
      const account: Account = new Account();
      account.password = this.password.value;
      account.username = this.email.value;
      account.firstName = this.firstName.value;
      account.lastName = this.lastName.value;

      this.accountService.createAccount(account).subscribe(
        data => {
          this.router.navigateByUrl('/auth/login');
        },
        error => {
          this.handleError(error);
        }
      );
    }
  }

  isFormValid(): boolean {
    return this.registrationForm.valid &&
      this.password.value === this.confirmPassword.value;
  }

  handleError(httpErrorResponse) {
    if (httpErrorResponse && httpErrorResponse.status === 400) {
      this.toastr.error(httpErrorResponse.error.message);
    } else if (httpErrorResponse && httpErrorResponse.status === 503) {
      this.toastr.error('Serviciul nu este disponibil momentan');
    } else {
      this.toastr.error('A aparut ceva eroare.');
    }
  }

  get confirmPassword() {
    return this.registrationForm.get('confirmPassword');
  }

  get lastName() {
    return this.registrationForm.get('lastName');
  }

  get firstName() {
    return this.registrationForm.get('firstName');
  }

  get email() {
    return this.registrationForm.get('email');
  }

  get password() {
    return this.registrationForm.get('password');
  }
}
