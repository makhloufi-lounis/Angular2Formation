import { RoomsComponent } from './rooms.component';
import { HomeComponent } from './home.component';

import { Routes } from '@angular/router';

export const ROUTES : Routes = [
    //declaration des routes 
    {path : '', redirectTo: '/home',  pathMatch : 'full'},
    {path : 'home', component : HomeComponent},
    {path : 'rooms', component : RoomsComponent}
];