import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CoreModule} from 'src/app/core/core.module';
import {ExamenSimulationComponent} from './examen-simulation.component';
import { ExamenSimulationRoutingModule } from './examen-simulation-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    ExamenSimulationRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [RouterModule],
  providers: [],
  declarations: [
    ExamenSimulationComponent
  ]
})

export class ExamenSimulationModule {
}
