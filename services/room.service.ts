import { Injectable } from '@angular/core';
import { Room } from './../model/room.model';
import { ApiService } from './api.service';

@Injectable() // sert à dire que RoomService à lui mmeme des dépandances
export class RoomService{

    constructor(private apiService : ApiService){}

    getTopFive() : Array<Room>{
        //let rooms : Array<Room> = this.apiService.getRooms();
        return this.apiService.getRooms();
    }
}