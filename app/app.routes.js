"use strict";
var rooms_component_1 = require("./rooms.component");
var home_component_1 = require("./home.component");
exports.ROUTES = [
    //declaration des routes 
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'rooms', component: rooms_component_1.RoomsComponent }
];
//# sourceMappingURL=app.routes.js.map