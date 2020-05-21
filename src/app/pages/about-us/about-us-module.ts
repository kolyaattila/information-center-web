import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../../shared/shared.module';
import {ReactiveFormsModule} from '@angular/forms';
import {AboutUsRoutingModule} from './about-us-routing.module';
import {AboutUsComponent} from './about-us.component';
import {AboutOurInfoComponent} from './about-our-info/about-our-info.component';
import {AboutStudentsComponent} from './about-students/about-students.component';
import {AboutTargetAudienceComponent} from './about-target-audience/about-target-audience.component';
import {AboutGoalsComponent} from './about-goals/about-goals.component';
import {AboutTeamComponent} from './about-team/about-team.component';


@NgModule({
  declarations: [AboutUsComponent, AboutOurInfoComponent, AboutStudentsComponent, AboutGoalsComponent,
    AboutTargetAudienceComponent, AboutTeamComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    AboutUsRoutingModule
  ],
  exports: [RouterModule],
  entryComponents: []
})
export class AboutUsModule {
}
