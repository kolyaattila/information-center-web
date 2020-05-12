import {RouterModule, Routes} from '@angular/router';
import {PagesComponent} from '../pages.component';
import {NgModule} from '@angular/core';
import {AdministratorComponent} from './administrator.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: '',
        component: AdministratorComponent
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
export class AdministratorRoutingModule {
}
