import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CartComponent} from './cart/cart.component';
import {CoreModule} from '../../core/core.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../../shared/shared.module';
import {RouterModule} from '@angular/router';
import {CartRoutingModule} from './cart-routing.module';
import { CheckoutComponent } from './checkout/checkout.component';


@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
    CartRoutingModule,
    SharedModule
  ],
  exports: [RouterModule],
  providers: [],
  declarations: [
    CartComponent,
    CheckoutComponent
  ],
  entryComponents: []
})
export class CartModule {
}
