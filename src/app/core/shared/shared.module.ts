import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonRepositoryService } from './service/common-repository.service';

@NgModule({
  declarations: [
   
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,

  ],
  exports: [

  ],
  providers: [
    CommonRepositoryService,
  ],
  entryComponents: [
  ]
})
export class SharedModule { }
