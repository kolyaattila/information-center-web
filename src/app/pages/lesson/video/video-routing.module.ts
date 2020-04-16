import {Routes,RouterModule} from '@angular/router';
import {LessonComponent} from '../lesson.component';
import {VideoComponent} from './video.component'
import { NgModule } from '@angular/core';

import {VideoListComponent} from './video-list/video-list.component';
import {PagesComponent} from '../../pages.component'
const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: ':id',
        component: VideoComponent
      },
      {
        path: 'list-video',
        component: VideoListComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class VideoRoutingModule {
}
