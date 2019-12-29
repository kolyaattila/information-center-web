import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxUiLoaderModule, NgxUiLoaderRouterModule, NgxUiLoaderHttpModule } from 'ngx-ui-loader';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommingSoonComponent } from './comming-soon/comming-soon.component';
import { SubscriptionComponentComponent } from './subscription-component/subscription-component.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

@NgModule({
  declarations: [
    AppComponent,
    CommingSoonComponent,
    SubscriptionComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxUiLoaderModule.forRoot({
      fgsSize: 100,
      fgsType: 'three-strings',
      fgsColor: '#f542a4',
      hasProgressBar: false,
      bgsOpacity: 0.0,
    }),
    NgxUiLoaderRouterModule,
    MDBBootstrapModule.forRoot()
  ],
  exports: [
    NgxUiLoaderModule,
    NgxUiLoaderRouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
