import { DialogComponent } from './dialog.component';
import { ROUTES } from './app.routes';
import { RoomsComponent } from './rooms.component';
import { HomeComponent } from './home.component';
import { FakeRoomService } from './../services/fakeroom.service';
import { ApiService } from './../services/api.service';
import { RoomService } from '../services/room.service';
import { TopfiveComponent } from './topfive.component';
import { RoomyAppComponent } from './app.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Provider } from '@angular/core';

import { RouterModule } from '@angular/router';

//Tester l'envirenement
const IS_PROD = false;

@NgModule({
    imports:[BrowserModule, RouterModule.forRoot(ROUTES)],
    //syntaxe racourci lorsque le provide et la class à utilisé ont le meme nom
    //providers: [RoomService, ApiService],
    providers: [
        {provide : ApiService, useClass: ApiService}, //ou ApiService, tout cour
        {provide : RoomService, useClass: IS_PROD ? RoomService : FakeRoomService},
    ],
    declarations:[RoomyAppComponent, TopfiveComponent, HomeComponent, RoomsComponent, DialogComponent], //declaration des components a utiliser
    bootstrap: [RoomyAppComponent] // Le composant qui vas démarer quand l'application sera démarer (le premier composant qui vas démarer)
})

export class AppModule{
    
}