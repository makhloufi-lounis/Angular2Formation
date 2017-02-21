import { Room } from './../model/room.model';

// c'est une class qui sert à faire du mock 
export class FakeRoomService{


    constructor(){
        console.log("Construct Fake Room Service");
    }

    getTopFive() : Array<Room>{
      /*let rooms : Array<Room> = [
        {id: 1, name : 'Pégase', image: '../content/images/Pegase.jpg'},
        {id: 2, name : 'Calliope', image: '../content/images/Calliope.jpg'},
        {id: 3, name : 'Uranie', image: '../content/images/Uranie.jpg'},
        {id: 4, name : 'Thalie', image: '../content/images/Thalie.jpg'},
        {id: 5, name : 'Persée', image: '../content/images/Persee.jpg'}
      ];*/

        return [];
    }
}