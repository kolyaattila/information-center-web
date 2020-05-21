import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContactUsComponent} from './contact-us.component';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../../shared/shared.module';
import {ReactiveFormsModule} from '@angular/forms';
import {ContactUsRoutingModule} from './contact-us-routing.module';
import {ContactDetailComponent} from './contact-detail/contact-detail.component';
import {SendMessageComponent} from './send-message/send-message.component';


@NgModule({
  declarations: [ContactUsComponent, ContactDetailComponent, SendMessageComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    ContactUsRoutingModule
  ],
  exports: [RouterModule, SendMessageComponent],
  entryComponents: []
})
export class ContactUsModule {
}
