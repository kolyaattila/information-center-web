import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../../shared/shared.module';
import {ReactiveFormsModule} from '@angular/forms';
import {QuestionListRoutingModule} from './question-list-routing.module';
import {QuestionListComponent} from './question-list.component';
import {QuestionViewModalComponent} from './question-view-modal/question-view-modal.component';
import {CourseModule} from '../course/course.module';
import {AddQuestionModalComponent} from './add-question-modal/add-question-modal.component';
import {AnswersComponent} from './answers/answers.component';


@NgModule({
  declarations: [QuestionListComponent, QuestionViewModalComponent, AddQuestionModalComponent, AnswersComponent],
  imports: [
    CommonModule,
    QuestionListRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    CourseModule
  ],
  exports: [RouterModule],
  entryComponents: [QuestionViewModalComponent, AddQuestionModalComponent, AnswersComponent]
})
export class QuestionListModule {
}
