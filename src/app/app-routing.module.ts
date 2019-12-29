import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CommingSoonComponent } from '../app/comming-soon/comming-soon.component'


const routes: Routes = [
  {path:'', component: CommingSoonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
