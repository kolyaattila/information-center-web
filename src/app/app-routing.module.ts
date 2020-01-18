import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CommingSoonComponent } from '../app/comming-soon/comming-soon.component'
import { NotfoundComponent } from './notfound-component/notfound.component';
import { SubscriptionActivationComponent } from './subscription-component/subscription-activation/subscription-activation.component';
import { UnsubscriptionComponent } from './subscription-component/unsubscription/unsubscription.component';


const routes: Routes = [
  {path:'', component: CommingSoonComponent},
  {path:'subscription/activation/:uid', component: SubscriptionActivationComponent},
  {path:'unsubscription/:uid', component: UnsubscriptionComponent},
  {path:'**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
