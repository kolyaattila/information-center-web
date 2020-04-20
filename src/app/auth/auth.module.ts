import {NgModule} from '@angular/core';
import {AuthRoutingModule} from './auth-routing.module';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthenticationService} from './service/authentication.service';

@NgModule({
  imports: [
    FormsModule,
    AuthRoutingModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  declarations: [],
  providers: [AuthenticationService]
})
export class AuthModule {
}
