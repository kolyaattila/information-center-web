import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CoreModule} from 'src/app/core/core.module';
import {PagesComponent} from '../pages/pages.component';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    RouterModule,
    PagesComponent
  ],
  providers: [],
  declarations: [
    PagesComponent
  ]
})

export class SharedModule {
}
