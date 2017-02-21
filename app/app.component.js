"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var router_1 = require("@angular/router");
var core_1 = require("@angular/core");
var RoomyAppComponent = (function () {
    function RoomyAppComponent(router) {
        this.router = router;
        this.title = "Ronny chez Fusacq";
        this.showDialog = false;
        this.textDialog = "";
    }
    Object.defineProperty(RoomyAppComponent.prototype, "isConnected", {
        get: function () {
            return this.user != null;
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
        this.router.navigate(['/home']);
    };
    RoomyAppComponent.prototype.onSpaceKeyup = function () {
        console.log(this.user.name);
    };
    RoomyAppComponent.prototype.showDialogMessage = function (message) {
        this.textDialog = message;
        if (this.showDialog == false) {
            this.showDialog = true;
        }
        else {
            this.showDialog = false;
        }
    };
    return RoomyAppComponent;
}());
RoomyAppComponent = __decorate([
    core_1.Component({
        selector: 'roomy-app',
        //Le ? pour dire user est optionnelle (operateur de navigateur securisé)
        template: "<h1>Formation Angular - {{title}}</h1>\n                <nav class=\"navbar navbar-default navbar-static-top\">\n                    <div class=\"container-fluid\">\n                        <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n                            <ul class=\"nav navbar-nav\">\n                                <li><a href=\"#\" routerLink=\"/home\" routerLinkActive='active'>Home</a></li>\n                                <li><a href=\"#\" routerLink=\"/rooms\" routerLinkActive='active'>Les salles</a></li>\n                                 \n                                <li><a href=\"\" routerLink=\"/user/create\">Cr\u00E9er un compte </a></li>\n                                <li><a href=\"#\"></a></li>\n                            </ul>\n                        \n                            <!-- Le ngSwitch est utilis\u00E9 avec croch\u00E9 est pas \u00E9toile -->\n                           <div [ngSwitch]=\"isConnected\" class=\"navbar-right\">\n                               <div *ngSwitchCase=\"false\">\n                                    <form class=\"navbar-form navbar-right\">\n                                        <div class=\"form-group\">\n                                            <input #login type=\"text\" class=\"form-control\" placeholder=\"Login\" (keyup.space)=\"onSpaceKeyup()\">\n                                        </div>\n                                        <div class=\"form-group\">\n                                            <input type=\"password\" class=\"form-control\">\n                                        </div>\n                                        <button type=\"button\" class=\"btn btn-default\"\n                                        (click)=\"onButtonConnectClick($event, login.value)\">Se connecter</button>\n                                    </form>\n                                   \n                                </div>\n                                <!-- <p [hidden]=\"isConnected\" >Bienvenu {{user?.name}}</p> -->\n                                <p *ngSwitchCase=\"true\" >Bienvenu {{user?.name}}</p>\n                            </div>\n                        </div>\n                    </div>\n                </nav>\n                <router-outlet></router-outlet>\n                <footer>\n                    <roomy-topfive>\n                    </roomy-topfive>\n                </footer>\n                <app-dialog [visible]=showDialog>\n                    {{textDialog}}\n                </app-dialog>\n                <br/>\n                <button (click)=\"showDialogMessage('Test text dialog')\">Show Dialog</button>\n                ",
        styles: ['a.active{color:red!important;}']
    }),
    __metadata("design:paramtypes", [router_1.Router])
], RoomyAppComponent);
exports.RoomyAppComponent = RoomyAppComponent;
//# sourceMappingURL=app.component.js.map