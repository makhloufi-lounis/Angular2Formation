import { Room } from '../model/room.model';

export class ApiService{
    
    constructor(){
        console.log("Construct Api service");
    }

    getRooms(): Array<Room>{
        //appel BackEnd
        console.log("apeel backend api");
        return null;
    }
}