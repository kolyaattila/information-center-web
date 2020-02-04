import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgxUiLoaderModule, NgxUiLoaderRouterModule, NgxUiLoaderHttpModule} from 'ngx-ui-loader';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CommingSoonComponent} from './comming-soon/comming-soon.component';
import {SubscriptionComponentComponent} from './subscription-component/subscription-component.component';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CoreModule} from './core/core.module';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';
import {NotfoundComponent} from './notfound-component/notfound.component';
import {SubscriptionActivationComponent} from './subscription-component/subscription-activation/subscription-activation.component';
import {UnsubscriptionComponent} from './subscription-component/unsubscription/unsubscription.component';
import {AuthModule} from './auth/auth.module';
import {PagesRoutingModule} from './pages/pages-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    CommingSoonComponent,
    SubscriptionComponentComponent,
    NotfoundComponent,
    SubscriptionActivationComponent,
    UnsubscriptionComponent
  ],
  imports: [
    BrowserModule,
    PagesRoutingModule,
    AppRoutingModule,
    NgxUiLoaderModule.forRoot({
      fgsSize: 100,
      fgsType: 'three-strings',
      fgsColor: '#f542a4',
      hasProgressBar: false,
      bgsOpacity: 0.0,
    }),
    NgxUiLoaderRouterModule,
    NgxUiLoaderHttpModule.forRoot({showForeground: true}),
    MDBBootstrapModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule,
    ToastrModule.forRoot(),
    AuthModule
  ],
  exports: [
    NgxUiLoaderModule,
    NgxUiLoaderRouterModule,
    NgxUiLoaderHttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
