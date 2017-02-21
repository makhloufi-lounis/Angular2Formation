"use strict";
var rooms_component_1 = require("./rooms.component");
var home_component_1 = require("./home.component");
var usercreatecomponent_1 = require("./usercreatecomponent");
exports.ROUTES = [
    //declaration des routes 
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'rooms', component: rooms_component_1.RoomsComponent },
    { path: 'user/create', component: usercreatecomponent_1.UserCreateComponent }
];
//# sourceMappingURL=app.routes.js.map