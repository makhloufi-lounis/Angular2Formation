import { Component } from '@angular/core';

@Component({
    selector : 'roomy-app',
    //Le ? pour dire user est optionnelle (operateur de navigateur securisé)
    template : `<h1> Formation Angular - {{ title }} </h1>
                <h2>Bienvenu {{ user?.name }}</h2> 
                .........
                <footer>
                    <roomy-topfive> </roomy-topfive>
                </footer>
                `
})
export class RoomyAppComponent{
        title:string = "Ronny chez Fusacq";
        user:any; // = {name:'Lounis'};
}