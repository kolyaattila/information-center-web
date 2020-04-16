import {NgModule, NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {CoreModule} from 'src/app/core/core.module';
import { SharedModule } from 'src/app/shared/shared.module';

import {VideoListComponent} from './video-list/video-list.component';
import {VideoRoutingModule} from './video-routing.module';
import {VideoComponent} from './video.component';
@NgModule({
  imports: [
    VideoRoutingModule,
    CommonModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule],
  exports: [RouterModule],
  schemas: [NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  declarations: [
    VideoComponent,
    VideoListComponent
  ]
})
export class VideoModule { }
