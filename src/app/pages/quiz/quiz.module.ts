import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CoreModule} from 'src/app/core/core.module';
import {QuizRoutingModule} from './quiz-routing.module';
import {QuizComponent} from './quiz.component';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
    QuizRoutingModule,
    SharedModule
  ],
  exports: [RouterModule],
  providers: [],
  declarations: [
    QuizComponent
  ]
})

export class QuizModule {
}
