import {Routes,RouterModule} from '@angular/router';
import {PagesComponent} from '../pages.component';
import {LessonComponent} from './lesson.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: '',
        component: LessonComponent
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
