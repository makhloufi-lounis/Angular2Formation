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
var core_1 = require("@angular/core");
var DialogComponent = (function () {
    function DialogComponent() {
        this.visible = true;
    }
    return DialogComponent;
}());
DialogComponent = __decorate([
    core_1.Component({
        selector: 'app-dialog',
        template: "\n                <div *ngIf=\"visible\" class=\"dialog\">\n                   <h1>Boite de dialog</h1>\n                   <button aria-label=\"Close\" class=\"dialog-close-btn\">x</button> \n                </div>\n                <div *ngIf=\"visible\" class=\"overlay\">\n                </div>\n            ",
        styles: ["\n       .dialog{\n            z-index: 1001;\n            position: fixed;\n            right: 0;\n            left: 0;\n            top:20px;\n            margin-right: auto;\n            margin-left: auto;\n            width:80%;\n            max-width:520px;\n            background-color:#fff;\n            padding:12px;\n            box-shadow: 0 7px 8px -4px rgba(0,00,0.2),\n                        0 13px 19px 2px rgba(0,00,0.14),\n                        0 5px 24px 4px rgba(0,00,0.12);\n            webkit-box-shadow: 0 7px 8px -4px rgba(0,00,0.2),\n                        0 13px 19px 2px rgba(0,00,0.14),\n                        0 5px 24px 4px rgba(0,00,0.12);\n            border:1px solod black;\n        }\n        .dialog-close-btn{\n           border:0;\n           background:none;\n           color: red;\n           position:absolute;\n           top:8px;\n           right:8px;\n           font-size: 1.2em;\n        }\n\n        .overlay{\n            position:fixed;\n            top:0;\n            bottom:0px;\n            left:0;\n            right:0;\n            background-color: rgba(0,0,0,0.5);\n            z-index: 1000;\n        }\n    "]
    }),
    __metadata("design:paramtypes", [])
], DialogComponent);
exports.DialogComponent = DialogComponent;
//# sourceMappingURL=dialog.component.js.map