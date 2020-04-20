import {async, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppComponent} from './app.component';
import {NgxUiLoaderHttpModule, NgxUiLoaderModule, NgxUiLoaderRouterModule} from 'ngx-ui-loader';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        NgxUiLoaderModule.forRoot({
          fgsSize: 100,
          fgsType: 'three-strings',
          fgsColor: '#f542a4',
          hasProgressBar: false,
          bgsOpacity: 0.0,
        }),
        NgxUiLoaderRouterModule,
        NgxUiLoaderHttpModule.forRoot({showForeground: true}),
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
