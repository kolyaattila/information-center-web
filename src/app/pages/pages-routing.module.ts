import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'quiz',
        loadChildren: () => import('./quiz/quiz.module').then(m => m.QuizModule)
      },
      {
        path: 'lesson',
        loadChildren: () => import('./lesson/lesson.module').then(m => m.LessonModule)
      },
      {
        path: 'examen',
        loadChildren: () => import('./examen-simulation/examen-simulation.module').then(m => m.ExamenSimulationModule)
      }
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
