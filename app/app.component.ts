import { Component } from '@angular/core';

@Component({
    selector : 'roomy-app',
    //Le ? pour dire user est optionnelle (operateur de navigateur securisé)
    template : `<h1>Formation Angular - {{title}}</h1>
                <nav class="navbar navbar-default navbar-static-top">
                    <div class="container-fluid">
                        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul class="nav navbar-nav">
                                <li><a href="#"></a></li>
                                <li><a href="#"></a></li>
                                <li><a href="#"></a></li>
                                <li><a href="#"></a></li>
                            </ul>
                        </div>
                   
                        <form class="navbar-form navbar-right">
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Login" (keyup.space)="onSpaceKeyup()">
                            </div>
                            <div class="form-group">
                                <input type="password" class="form-control">
                            </div>
                            <button type="button" class="btn btn-default"
                            (click)="onButtonConnectClick($event)">Se connecter</button>
                        </form>
                     </div>
                </nav>
                <p [hidden] = "isConnected">Bienvenu {{user?.name}}</p>
                ....
                <roomy-topfive>
                </roomy-topfive>

                `
})
export class RoomyAppComponent{
        title:string = "Ronny chez Fusacq";
        user:any; // = {name:'Lounis'};

        get isConnected(){
            return this.user == null;
        }

        onButtonConnectClick(event){
            console.log(event);
            this.user = {name : 'Lounis'};
            event.stopPropagation();

        }

        onSpaceKeyup(){
            console.log(this.user.name);
        }
}