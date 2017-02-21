import { Injectable } from '@angular/core';
import { Room } from './../model/room.model';
import { ApiService } from './api.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/retry';

@Injectable() // sert à dire que RoomService à lui mmeme des dépandances
export class RoomService{

    constructor(private apiService : ApiService){}

    getTopFive() : Observable<Room[]>{
        //let rooms : Array<Room> = this.apiService.getRooms();
        return this.apiService.getRooms().retry(3);
    }
}