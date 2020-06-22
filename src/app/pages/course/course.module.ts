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
import {CourseCreateModalComponent} from './course-create-modal/course-create-modal.component';
import {CourseFilterComponent} from './cours-filter/course-filter.component';
import {CoursManagementComponent} from './cours-management/cours-management.component';
import {AddTopicModelComponent} from '../lesson/add-topic-model/add-topic-model.component';
import {LessonModule} from '../lesson/lesson.module';
import {VideoModule} from '../lesson/video/video.module';
import {QuizCreateComponent} from './quiz-create/quiz-create.component';
import {CourseReviewComponent} from './course-review/course-review.component';
import {BarRatingModule} from 'ngx-bar-rating';
import {MyQuizComponent} from './my-quiz/my-quiz.component';


@NgModule({
  declarations: [CourseListComponent,
    CourseDetailsComponent,
    QuizComponent,
    QuizResultComponent,
    QuestionComponent,
    CourseCreateModalComponent,
    CourseFilterComponent,
    CoursManagementComponent,
    QuizCreateComponent,
    CourseReviewComponent,
    MyQuizComponent
  ],
  imports: [
    CommonModule,
    CourseRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    LessonModule,
    VideoModule,
    BarRatingModule
  ],
  exports: [RouterModule, QuestionComponent],
  entryComponents: [CourseCreateModalComponent, AddTopicModelComponent]
})
export class CourseModule {
}
