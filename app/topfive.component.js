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
var room_service_1 = require("../services/room.service");
var core_1 = require("@angular/core");
var TopfiveComponent = (function () {
    function TopfiveComponent(roomService) {
        this.roomService = roomService;
        this.rooms = [];
    }
    TopfiveComponent.prototype.ngOnInit = function () {
        var _this = this;
        //this.roomService.getTopFive().subscribe(rooms => this.rooms)
        this.roomService.getTopFive().subscribe(function (r) { return _this.rooms = r; });
        console.log(this.rooms);
    };
    return TopfiveComponent;
}());
TopfiveComponent = __decorate([
    core_1.Component({
        selector: 'roomy-topfive',
        templateUrl: './app/topfive.component.html'
    }),
    __metadata("design:paramtypes", [room_service_1.RoomService])
], TopfiveComponent);
exports.TopfiveComponent = TopfiveComponent;
//# sourceMappingURL=topfive.component.js.map