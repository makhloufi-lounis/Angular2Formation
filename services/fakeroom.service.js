"use strict";
// c'est une class qui sert à faire du mock 
var FakeRoomService = (function () {
    function FakeRoomService() {
        console.log("Construct Fake Room Service");
    }
    FakeRoomService.prototype.getTopFive = function () {
        /*let rooms : Array<Room> = [
          {id: 1, name : 'Pégase', image: '../content/images/Pegase.jpg'},
          {id: 2, name : 'Calliope', image: '../content/images/Calliope.jpg'},
          {id: 3, name : 'Uranie', image: '../content/images/Uranie.jpg'},
          {id: 4, name : 'Thalie', image: '../content/images/Thalie.jpg'},
          {id: 5, name : 'Persée', image: '../content/images/Persee.jpg'}
        ];*/
        return [];
    };
    return FakeRoomService;
}());
exports.FakeRoomService = FakeRoomService;
//# sourceMappingURL=fakeroom.service.js.map