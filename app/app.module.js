"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var usercreatecomponent_1 = require("./usercreatecomponent");
var dialog_component_1 = require("./dialog.component");
var app_routes_1 = require("./app.routes");
var rooms_component_1 = require("./rooms.component");
var home_component_1 = require("./home.component");
var fakeroom_service_1 = require("./../services/fakeroom.service");
var api_service_1 = require("./../services/api.service");
var room_service_1 = require("../services/room.service");
var topfive_component_1 = require("./topfive.component");
var app_component_1 = require("./app.component");
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
//Tester l'envirenement
var IS_PROD = true;
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, router_1.RouterModule.forRoot(app_routes_1.ROUTES, { useHash: true }), forms_1.FormsModule, forms_1.ReactiveFormsModule, http_1.HttpModule],
        //syntaxe racourci lorsque le provide et la class à utilisé ont le meme nom
        //providers: [RoomService, ApiService],
        providers: [
            { provide: api_service_1.ApiService, useClass: api_service_1.ApiService },
            { provide: room_service_1.RoomService, useClass: IS_PROD ? room_service_1.RoomService : fakeroom_service_1.FakeRoomService },
        ],
        declarations: [app_component_1.RoomyAppComponent, topfive_component_1.TopfiveComponent, home_component_1.HomeComponent, rooms_component_1.RoomsComponent, dialog_component_1.DialogComponent, usercreatecomponent_1.UserCreateComponent],
        bootstrap: [app_component_1.RoomyAppComponent] // Le composant qui vas démarer quand l'application sera démarer (le premier composant qui vas démarer)
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map