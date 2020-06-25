import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'app-signup',
    templateUrl: `./signup.component.html`,
    styleUrls :['./signup.component.css']
})

export class SignupComponent implements OnInit{
    userName;
    userfullName;
    userPass;
    usereMail;
    userpNumber;
    userPass2;
    userlastName;
    userDOB;
    userCountry;

     constructor(){}
    ngOnInit(){}
   createUser(): void {
       alert("Submitted");
   }
      
}