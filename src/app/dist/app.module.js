"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = exports.initializeApp = void 0;
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var animations_1 = require("@angular/platform-browser/animations");
var angular_1 = require("@ionic/angular");
var ngx_1 = require("@ionic-native/splash-screen/ngx");
var ngx_2 = require("@ionic-native/status-bar/ngx");
var ngx_3 = require("@ionic-native/in-app-browser/ngx");
var app_component_1 = require("./app.component");
var app_routing_module_1 = require("./app-routing.module");
var service_worker_1 = require("@angular/service-worker");
var http_1 = require("@angular/common/http");
var environment_1 = require("../environments/environment");
var services_1 = require("./shared/services");
var interceptors_1 = require("./shared/interceptors");
var focus_calendar_page_1 = require("./shared/dialog-components/focus-calendar/focus-calendar.page");
var saboteur_selection_page_1 = require("./shared/dialog-components/saboteur-selection/saboteur-selection.page");
// FONTS
var angular_fontawesome_1 = require("@fortawesome/angular-fontawesome");
var convert_saboteur_name_pipe_1 = require("./shared/pipes/convert-saboteur-name.pipe");
// SERVICE
var services_2 = require("./shared/services");
function initializeApp(appInitService) {
    return function () {
        return appInitService.Init();
    };
}
exports.initializeApp = initializeApp;
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                focus_calendar_page_1.FocusCalendarPage,
                saboteur_selection_page_1.SaboteurSelectionPage,
                convert_saboteur_name_pipe_1.ConvertSaboteur,
            ],
            entryComponents: [],
            imports: [platform_browser_1.BrowserModule,
                animations_1.BrowserAnimationsModule,
                angular_1.IonicModule.forRoot({
                // navAnimation:enterAnimation
                }),
                app_routing_module_1.AppRoutingModule,
                http_1.HttpClientModule,
                angular_fontawesome_1.FontAwesomeModule,
                service_worker_1.ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment_1.environment.production }),
            ],
            providers: [
                ngx_2.StatusBar,
                ngx_1.SplashScreen,
                services_1.AuthService,
                ngx_3.InAppBrowser,
                services_1.StorageService,
                services_1.DialogService,
                services_1.DailyFocusService,
                { provide: router_1.RouteReuseStrategy, useClass: angular_1.IonicRouteStrategy },
                { provide: http_1.HTTP_INTERCEPTORS, useClass: interceptors_1.InterceptorProvider, multi: true },
                { provide: http_1.HTTP_INTERCEPTORS, useClass: interceptors_1.ErrorInterceptor, multi: true },
                { provide: core_1.APP_INITIALIZER, useFactory: initializeApp, deps: [services_2.AppInitService], multi: true }
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
