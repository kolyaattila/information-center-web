import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CoreModule} from 'src/app/core/core.module';
import {LessonComponent} from './lesson.component';
import {LessonRoutingModule} from './lesson-routing.module';
import {SharedModule} from 'src/app/shared/shared.module';
import {TopicListComponent} from './topic-list/topic-list.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AddTopicModelComponent} from './add-topic-model/add-topic-model.component';
import {UpdateTopicModelComponent} from './update-topic-model/update-topic-model.component';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    LessonRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    NgbModule,
  ],
  exports: [RouterModule],
  providers: [],
  declarations: [
    LessonComponent,
    TopicListComponent,
    AddTopicModelComponent,
    UpdateTopicModelComponent
  ],
  entryComponents: [AddTopicModelComponent,
    UpdateTopicModelComponent]
})

export class LessonModule {
}
