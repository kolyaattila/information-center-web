import {RouterModule, Routes} from '@angular/router';
import {PagesComponent} from '../pages.component';
import {QuizComponent} from './quiz.component';
import {NgModule} from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: '',
        component: QuizComponent
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
export class QuizRoutingModule {
}
