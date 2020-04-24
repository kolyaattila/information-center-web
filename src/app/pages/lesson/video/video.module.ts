import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CoreModule} from 'src/app/core/core.module';
import {SharedModule} from 'src/app/shared/shared.module';

import {VideoListComponent} from './video-list/video-list.component';
import {VideoRoutingModule} from './video-routing.module';
import {VideoComponent} from './video.component';
import {CreateVideoComponent} from './create-video/create-video.component';
import {UpdateVideoComponent} from './update-video/update-video.component';

@NgModule({
  imports: [
    VideoRoutingModule,
    CommonModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule],
  exports: [RouterModule],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  declarations: [
    VideoComponent,
    VideoListComponent,
    CreateVideoComponent,
    UpdateVideoComponent
  ],
  entryComponents: [CreateVideoComponent, UpdateVideoComponent]
})
export class VideoModule {
}
