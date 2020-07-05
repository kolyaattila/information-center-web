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
        path: 'lesson',
        loadChildren: () => import('./lesson/lesson.module').then(m => m.LessonModule),
        // canActivate: [AuthGuard]
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
      },
      {
        path: 'course',
        loadChildren: () => import('./course/course.module').then(m => m.CourseModule)
      },
      {
        path: 'questions',
        loadChildren: () => import('./question-list/question-list.module').then(m => m.QuestionListModule)
        // canActivate: [AuthGuard]
      },
      {
        path: 'about-us',
        loadChildren: () => import('./about-us/about-us-module').then(m => m.AboutUsModule)
      },
      {
        path: 'contact-us',
        loadChildren: () => import('./contact-us/contact-us.module').then(m => m.ContactUsModule)
      },
      {
        path: 'cart',
        loadChildren: () => import('./cart/cart.module').then(m => m.CartModule)
      }
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
