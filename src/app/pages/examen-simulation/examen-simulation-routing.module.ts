import {PagesComponent} from '../pages.component';
import {ExamenSimulationComponent} from './examen-simulation.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: '',
        component: ExamenSimulationComponent
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
export class ExamenSimulationRoutingModule {
}