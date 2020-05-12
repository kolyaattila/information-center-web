import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CoreModule} from 'src/app/core/core.module';
import {SharedModule} from '../../shared/shared.module';
import {AdministratorRoutingModule} from './administrator-routing.module';
import {CarouselModule} from 'ngx-owl-carousel-o';
import {AdministratorComponent} from './administrator.component';
import {ChartsModule} from 'ng2-charts';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
    AdministratorRoutingModule,
    SharedModule,
    CarouselModule,
    ChartsModule
  ],
  exports: [RouterModule],
  providers: [],
  declarations: [
    AdministratorComponent]
})

export class AdministratorModule {
}
