import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CourseListComponent} from './course-list/course-list.component';
import {RouterModule} from '@angular/router';
import {CourseRoutingModule} from './course-routing.module';
import {SharedModule} from '../../shared/shared.module';
import {CourseDetailsComponent} from './course-details/course-details.component';
import {QuizComponent} from './quiz/quiz.component';
import {ReactiveFormsModule} from '@angular/forms';
import {QuizResultComponent} from './quiz-result/quiz-result.component';
import {QuestionComponent} from './quiz/question/question.component';


@NgModule({
  declarations: [CourseListComponent, CourseDetailsComponent, QuizComponent, QuizResultComponent, QuestionComponent],
  imports: [
    CommonModule,
    CourseRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  exports: [RouterModule]
})
export class CourseModule {
}
