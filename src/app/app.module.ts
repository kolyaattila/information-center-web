import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgxUiLoaderHttpModule, NgxUiLoaderModule, NgxUiLoaderRouterModule} from 'ngx-ui-loader';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CommingSoonComponent} from './comming-soon/comming-soon.component';
import {SubscriptionComponentComponent} from './subscription-component/subscription-component.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CoreModule} from './core/core.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';
import {NotfoundComponent} from './notfound-component/notfound.component';
import {SubscriptionActivationComponent} from './subscription-component/subscription-activation/subscription-activation.component';
import {UnsubscriptionComponent} from './subscription-component/unsubscription/unsubscription.component';
import {AuthModule} from './auth/auth.module';
import {PagesRoutingModule} from './pages/pages-routing.module';
import {TokenInterceptor} from './auth/interceptor/token.interceptor';
import {HttpErrorInterceptor} from './auth/interceptor/http-error.interceptor';
import {SharedModule} from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    CommingSoonComponent,
    SubscriptionComponentComponent,
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
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule,
    ToastrModule.forRoot(),
    AuthModule,
    SharedModule
  ],
  exports: [
    NgxUiLoaderModule,
    NgxUiLoaderRouterModule,
    NgxUiLoaderHttpModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
