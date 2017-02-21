import { Room } from './../model/room.model';
import { RoomService } from '../services/room.service';
import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
 

@Component({
    selector : 'roomy-topfive',
    templateUrl : './app/topfive.component.html'
})
export class TopfiveComponent{
    rooms : Array<Room> = []  ;

    constructor(private roomService: RoomService){}

    ngOnInit():void{
        //this.roomService.getTopFive().subscribe(rooms => this.rooms)
         this.roomService.getTopFive().subscribe(
             r => this.rooms = r
         );

        console.log(this.rooms);
    }
}