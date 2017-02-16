import { NgSwitch } from '@angular/common/src/directives/ng_switch';
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
                         <!-- Le ngSwitch est utilisé avec croché est pas étoile -->
                       <div [ngSwitch]="isConnected" class="navbar-right">
                            <form *ngSwitchCase="false" class="navbar-form navbar-right">
                                <div class="form-group">
                                    <input #login type="text" class="form-control" placeholder="Login" (keyup.space)="onSpaceKeyup()">
                                </div>
                                <div class="form-group">
                                    <input type="password" class="form-control">
                                </div>
                                <button type="button" class="btn btn-default"
                                (click)="onButtonConnectClick($event, login.value)">Se connecter</button>
                            </form>
                            <!-- <p [hidden]="isConnected" >Bienvenu {{user?.name}}</p> -->
                            <p *ngSwitchCase="true" >Bienvenu {{user?.name}}</p>
                        </div>
                    </div>
                </nav>
                <roomy-topfive>
                </roomy-topfive>

                `
})
export class RoomyAppComponent{
        title:string = "Ronny chez Fusacq";
        user:any; // = {name:'Lounis'};

        get isConnected(){
            return this.user != null;
        }

        onButtonConnectClick(event, name : string){
            console.log(event);
            // name vas prendre directement la valeur de name retourné par l'evenement
            // et vu que le nom de l'attribut user et le meme que le nom du parametre (name)
            //on peut utilisé directement name
            // on aurait pu utilisé login comme paramétre et => this.user = {name : login}
            this.user = {name};
            event.stopPropagation();

        }

        onSpaceKeyup(){
            console.log(this.user.name);
        }
}