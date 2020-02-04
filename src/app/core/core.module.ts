import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {ServiceSharedModule} from './shared/service-shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ServiceSharedModule
  ]
})
export class CoreModule {
}
