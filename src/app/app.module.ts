import {
  NgModule,
  APP_INITIALIZER,
  CUSTOM_ELEMENTS_SCHEMA,
} from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { InAppBrowser } from "@ionic-native/in-app-browser/ngx";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { FormsModule } from "@angular/forms";
import { ChartsModule } from "ng2-charts";

import { ServiceWorkerModule } from "@angular/service-worker";
import {
  HttpClientModule,
  HttpClient,
  HTTP_INTERCEPTORS,
} from "@angular/common/http";
import { environment } from "../environments/environment";
import { pageTransition } from "./page-transition";
import { CountUpModule } from "ngx-countup";

import {
  DialogService,
} from "./shared/services";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

export function initializeApp() {
  return (): Promise<any> => {
    return;
  };
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    IonicModule.forRoot({
      swipeBackEnabled: false,
      navAnimation: pageTransition,
    }),
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    ChartsModule,
    CountUpModule,
    ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: environment.production,
    }),
  ],
  providers: [
    StatusBar,
    SplashScreen,
    InAppBrowser,
    DialogService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
