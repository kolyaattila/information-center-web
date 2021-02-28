import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CoreModule} from 'src/app/core/core.module';
import {PagesComponent} from '../pages/pages.component';
import {ConfirmationModalComponent} from './modal/confirmation-modal/confirmation-modat.component';
import {MaterialModule} from './matirial/matirial.module';
import {NotfoundComponent} from '../notfound-component/notfound.component';
import {NgChemdoodleModule} from './chem-doodle/chem-doodle.module';
import {MathModule} from './math/math.module';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MaterialModule,
    NgChemdoodleModule,
    MathModule
  ],
  exports: [
    RouterModule,
    PagesComponent,
    ConfirmationModalComponent,
    MaterialModule,
    NgChemdoodleModule,
    MathModule
  ],
  providers: [],
  declarations: [
    PagesComponent,
    ConfirmationModalComponent,
    NotfoundComponent
  ],
  entryComponents: [
    ConfirmationModalComponent
  ]
})

export class SharedModule {
}
