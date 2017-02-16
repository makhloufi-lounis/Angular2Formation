import { Component } from '@angular/core';


@Component({
    selector: 'app-dialog',
    template: `
                <div *ngIf="visible" class="dialog">
                   <h1>Boite de dialog</h1>
                   <button aria-label="Close" class="dialog-close-btn">x</button> 
                </div>
                <div *ngIf="visible" class="overlay">
                </div>
            `
    ,
    styles : [`
       .dialog{
            z-index: 1001;
            position: fixed;
            right: 0;
            left: 0;
            top:20px;
            margin-right: auto;
            margin-left: auto;
            width:80%;
            max-width:520px;
            background-color:#fff;
            padding:12px;
            box-shadow: 0 7px 8px -4px rgba(0,00,0.2),
                        0 13px 19px 2px rgba(0,00,0.14),
                        0 5px 24px 4px rgba(0,00,0.12);
            webkit-box-shadow: 0 7px 8px -4px rgba(0,00,0.2),
                        0 13px 19px 2px rgba(0,00,0.14),
                        0 5px 24px 4px rgba(0,00,0.12);
            border:1px solod black;
        }
        .dialog-close-btn{
           border:0;
           background:none;
           color: red;
           position:absolute;
           top:8px;
           right:8px;
           font-size: 1.2em;
        }

        .overlay{
            position:fixed;
            top:0;
            bottom:0px;
            left:0;
            right:0;
            background-color: rgba(0,0,0,0.5);
            z-index: 1000;
        }
    `]
})

export class DialogComponent{

    visible : boolean = true;

    constructor(){
        
    }
}