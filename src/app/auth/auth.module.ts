import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './auth-routing.module';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';


@NgModule({
  imports: [
    FormsModule,
    AuthRoutingModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  declarations: [ LoginComponent, RegistrationComponent],
  providers: [ ]
})
export class AuthModule { }
