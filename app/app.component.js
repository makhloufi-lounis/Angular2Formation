"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var RoomyAppComponent = (function () {
    function RoomyAppComponent() {
        this.title = "Ronny chez Fusacq";
    }
    Object.defineProperty(RoomyAppComponent.prototype, "isConnected", {
        get: function () {
            return this.user == null;
        },
        enumerable: true,
        configurable: true
    });
    RoomyAppComponent.prototype.onButtonConnectClick = function (event, name) {
        console.log(event);
        // name vas prendre directement la valeur de name retourné par l'evenement
        // et vu que le nom de l'attribut user et le meme que le nom du parametre (name)
        //on peut utilisé directement name
        // on aurait pu utilisé login comme paramétre et => this.user = {name : login}
        this.user = { name: name };
        event.stopPropagation();
    };
    RoomyAppComponent.prototype.onSpaceKeyup = function () {
        console.log(this.user.name);
    };
    return RoomyAppComponent;
}());
RoomyAppComponent = __decorate([
    core_1.Component({
        selector: 'roomy-app',
        //Le ? pour dire user est optionnelle (operateur de navigateur securisé)
        template: "<h1>Formation Angular - {{title}}</h1>\n                <nav class=\"navbar navbar-default navbar-static-top\">\n                    <div class=\"container-fluid\">\n                        <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n                            <ul class=\"nav navbar-nav\">\n                                <li><a href=\"#\"></a></li>\n                                <li><a href=\"#\"></a></li>\n                                <li><a href=\"#\"></a></li>\n                                <li><a href=\"#\"></a></li>\n                            </ul>\n                        </div>\n                   \n                        <form class=\"navbar-form navbar-right\">\n                            <div class=\"form-group\">\n                                <input #login type=\"text\" class=\"form-control\" placeholder=\"Login\" (keyup.space)=\"onSpaceKeyup()\">\n                            </div>\n                            <div class=\"form-group\">\n                                <input type=\"password\" class=\"form-control\">\n                            </div>\n                            <button type=\"button\" class=\"btn btn-default\"\n                            (click)=\"onButtonConnectClick($event, login.value)\">Se connecter</button>\n                        </form>\n                     </div>\n                </nav>\n                <p [hidden] = \"isConnected\">Bienvenu {{user?.name}}</p>\n                <roomy-topfive>\n                </roomy-topfive>\n\n                "
    })
], RoomyAppComponent);
exports.RoomyAppComponent = RoomyAppComponent;
//# sourceMappingURL=app.component.js.map