"use strict";
var app_module_1 = require("./app/app.module"); // Le module qui lance l'application
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic"); // le Module qui vas lancer l'application dans le navigateur
// la fonction qui vas 
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=main.js.map