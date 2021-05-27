"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var helpers_1 = require("../app/modules/core/helpers");
var routes = [
    {
        path: 'home',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./modules/home/home.module'); }).then(function (m) { return m.HomePageModule; }); },
        canActivate: [helpers_1.AuthGuard]
    },
    {
        path: '',
        redirectTo: 'auth',
        pathMatch: 'full'
    },
    {
        path: 'auth',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./modules/auth/auth.module'); }).then(function (m) { return m.AuthPageModule; }); },
        canActivate: [helpers_1.LoginGuard]
    },
    {
        path: 'component-data',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./modules/core/modal/component-data/component-data.module'); }).then(function (m) { return m.ComponentDataPageModule; }); }
    },
];
var config = {
    useHash: true,
    preloadingStrategy: router_1.PreloadAllModules
};
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forRoot(routes, config)
            ],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
