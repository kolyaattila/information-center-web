import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AccountComponent} from './account.component';
import {AccountRoutingModule} from './account-routing.module';
import {RouterModule} from '@angular/router';
import {CoreModule} from '../../core/core.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../../shared/shared.module';
import {EditAccountModalComponent} from './edit-account-modal/edit-account-modal.component';


@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
    AccountRoutingModule,
    SharedModule
  ],
  exports: [RouterModule],
  providers: [],
  declarations: [
    AccountComponent,
    EditAccountModalComponent
  ],
  entryComponents: [EditAccountModalComponent]
})

export class AccountModule {
}
