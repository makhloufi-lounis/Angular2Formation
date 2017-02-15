import { TopfiveComponent } from './topfive.component';
import { RoomyAppComponent } from './app.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

@NgModule({
    imports:[BrowserModule],
    declarations:[RoomyAppComponent, TopfiveComponent], //declaration des components a utiliser
    bootstrap: [RoomyAppComponent] // Le composant qui vas démarer quand l'application sera démarer (le premier composant qui vas démarer)
})

export class AppModule{

}