import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from '../auth/guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
        canActivate: [AuthGuard]
      },
      {   
        path: 'quiz',
        loadChildren: () => import('./quiz/quiz.module').then(m => m.QuizModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'lesson',
        loadChildren: () => import('./lesson/lesson.module').then(m => m.LessonModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'examen',
        loadChildren: () => import('./examen-simulation/examen-simulation.module').then(m => m.ExamenSimulationModule),
        canActivate: [AuthGuard]
      }
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
