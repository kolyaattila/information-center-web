import {RouterModule, Routes} from '@angular/router';
import {PagesComponent} from '../pages.component';
import {NgModule} from '@angular/core';
import {CourseListComponent} from './course-list/course-list.component';
import {CourseDetailsComponent} from './course-details/course-details.component';
import {QuizComponent} from './quiz/quiz.component';
import {QuizResultComponent} from './quiz-result/quiz-result.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: '',
        component: CourseListComponent
      },
      {
        path: 'details',
        component: CourseDetailsComponent
      },
      {
        path: 'quiz',
        component: QuizComponent
      }, {
        path: 'quiz/result/:id',
        component: QuizResultComponent
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
export class CourseRoutingModule {
}
