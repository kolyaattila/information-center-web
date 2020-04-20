import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CoreModule} from 'src/app/core/core.module';
import {SharedModule} from '../../shared/shared.module';
import {LoginRegisterComponent} from './login-register.component';
import {LoginRegisterRoutingModule} from './login-register-routing.module';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
    LoginRegisterRoutingModule,
    SharedModule
  ],
  exports: [RouterModule],
  providers: [],
  declarations: [
    LoginRegisterComponent
  ]
})

export class LoginRegisterModule {
}
