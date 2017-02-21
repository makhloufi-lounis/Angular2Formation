"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var user_model_1 = require("../model/user.model");
/*const isOldEnough = (control : FormControl) =>{
    const brithDay = new Date(control.value);
    brithDay.setFullYear(brithDay.getFullYear() + 18);
    return brithDay < new Date() ? null : {tooYoug : true};
}*/
var UserCreateComponent = (function () {
    function UserCreateComponent() {
        this.user = new user_model_1.User();
    }
    UserCreateComponent.birthDateValidator = function (control) {
        var brithDay = new Date(control.value);
        brithDay.setFullYear(brithDay.getFullYear() + 18);
        return brithDay < new Date() ? null : { tooYoug: true };
    };
    /*constructor(fb:FormBuilder){

    }*/
    UserCreateComponent.prototype.saveUser = function () {
        console.log(this.user);
    };
    return UserCreateComponent;
}());
UserCreateComponent = __decorate([
    core_1.Component({
        selector: 'roomy-user-create',
        templateUrl: './app/user.create.component.html'
    })
], UserCreateComponent);
exports.UserCreateComponent = UserCreateComponent;
//# sourceMappingURL=usercreatecomponent.js.map