import { selector } from 'rxjs/operator/multicast';
import { Component } from '@angular/core';
import { User } from '../model/user.model';

import { FormControl } from '@angular/forms';

/*const isOldEnough = (control : FormControl) =>{
    const brithDay = new Date(control.value);
    brithDay.setFullYear(brithDay.getFullYear() + 18);
    return brithDay < new Date() ? null : {tooYoug : true};
}*/

@Component({
    selector:'roomy-user-create',
    templateUrl : './app/user.create.component.html'
})


export class UserCreateComponent{
    
    static birthDateValidator(control : FormControl){
        const brithDay = new Date(control.value);
        brithDay.setFullYear(brithDay.getFullYear() + 18);
        return brithDay < new Date() ? null : {tooYoug : true};
    }
   

    user = new User( );
    //userForm:FormGroup;
    crithdateCtrl:FormControl;

    /*constructor(fb:FormBuilder){

    }*/

    saveUser(){
        console.log(this.user);
    }

    

}