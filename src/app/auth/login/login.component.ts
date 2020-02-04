import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {FormGroup, FormControl, Validators, FormArray, Form} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

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
    private router: Router) {
  }

  ngOnInit() {
  }

  onSubmit() {
  }

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

}
