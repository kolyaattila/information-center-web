import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from '../auth/guard/auth.guard';


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
      },
      {
        path: 'login',
        loadChildren: () => import('./login-register/login-register.module').then(m => m.LoginRegisterModule)
      },
      {
        path: 'account',
        loadChildren: () => import('./account/account.module').then(m => m.AccountModule),
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
