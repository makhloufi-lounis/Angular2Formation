import { Router } from '@angular/router';
import { NgSwitch } from '@angular/common/src/directives/ng_switch';
import { Component} from '@angular/core';

@Component({
    selector : 'roomy-app',
    //Le ? pour dire user est optionnelle (operateur de navigateur securisé)
    template : `<h1>Formation Angular - {{title}}</h1>
                <nav class="navbar navbar-default navbar-static-top">
                    <div class="container-fluid">
                        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul class="nav navbar-nav">
                                <li><a href="#" routerLink="/home" routerLinkActive='active'>Home</a></li>
                                <li><a href="#" routerLink="/rooms" routerLinkActive='active'>Les salles</a></li>
                                 
                                <li><a href="" routerLink="/user/create">Créer un compte </a></li>
                                <li><a href="#"></a></li>
                            </ul>
                        
                            <!-- Le ngSwitch est utilisé avec croché est pas étoile -->
                           <div [ngSwitch]="isConnected" class="navbar-right">
                               <div *ngSwitchCase="false">
                                    <form class="navbar-form navbar-right">
                                        <div class="form-group">
                                            <input #login type="text" class="form-control" placeholder="Login" (keyup.space)="onSpaceKeyup()">
                                        </div>
                                        <div class="form-group">
                                            <input type="password" class="form-control">
                                        </div>
                                        <button type="button" class="btn btn-default"
                                        (click)="onButtonConnectClick($event, login.value)">Se connecter</button>
                                    </form>
                                   
                                </div>
                                <!-- <p [hidden]="isConnected" >Bienvenu {{user?.name}}</p> -->
                                <p *ngSwitchCase="true" >Bienvenu {{user?.name}}</p>
                            </div>
                        </div>
                    </div>
                </nav>
                <router-outlet></router-outlet>
                <footer>
                    <roomy-topfive>
                    </roomy-topfive>
                </footer>
                <app-dialog [visible]=showDialog>
                    {{textDialog}}
                </app-dialog>
                <br/>
                <button (click)="showDialogMessage('Test text dialog')">Show Dialog</button>
                `,
    styles:['a.active{color:red!important;}']
})
export class RoomyAppComponent{
    
        title:string = "Ronny chez Fusacq";
        user:any; // = {name:'Lounis'};
        showDialog : boolean = false;
        textDialog : string = "";
        constructor(private router:Router){

        }

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
            this.router.navigate(['/home']);
        }

        onSpaceKeyup(){
            console.log(this.user.name);
        }
        
        showDialogMessage(message:string):void{
            this.textDialog = message;
           if(this.showDialog == false){
            this.showDialog = true;
           }else{
               this.showDialog = false;
           }
            
        }

       /* hideDialog(visible : boolean){
            this.showDialog = visible;
        }*/
}