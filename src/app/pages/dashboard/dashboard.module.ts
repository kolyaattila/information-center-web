import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CoreModule} from 'src/app/core/core.module';
import {SharedModule} from '../../shared/shared.module';
import {DashboardComponent} from './dashboard.component';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {BannerComponent} from './banner/banner.component';
import {OurCourseComponent} from './our-course/our-course.component';
import {PreparationComponent} from './preparation/preparation.component';
import {CarouselModule} from 'ngx-owl-carousel-o';
import {PeopleFeedbackComponent} from './people-feedback/people-feedback.component';
import {OurTeamComponent} from './our-team/our-team.component';
import {ContactUsComponent} from './contact-us/contact-us.component';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
    DashboardRoutingModule,
    SharedModule,
    CarouselModule
  ],
  exports: [RouterModule],
  providers: [],
  declarations: [
    DashboardComponent,
    BannerComponent,
    OurCourseComponent,
    PreparationComponent,
    PeopleFeedbackComponent,
    OurTeamComponent,
    ContactUsComponent
  ]
})

export class DashboardModule {
}
