import { RoomService } from '../services/room.service';
import { Component } from '@angular/core';

@Component({
    selector : 'roomy-topfive',
    templateUrl : './app/topfive.component.html'
})
export class TopfiveComponent{
    rooms : Array<any> = [];

    constructor(private roomService: RoomService){}

    ngOnInit():void{
        this.rooms = this.roomService.getTopFive();
    }
}