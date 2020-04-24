import {RouterModule, Routes} from '@angular/router';
import {PagesComponent} from '../pages.component';
import {LessonComponent} from './lesson.component';
import {NgModule} from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: '',
        component: LessonComponent
      },
      {
        path: 'video',
        loadChildren: () => import('./video/video.module').then(m => m.VideoModule)
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
export class LessonRoutingModule {
}
