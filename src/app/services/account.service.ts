import { Injectable } from '@angular/core';
import { User } from '../login/user';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor() { }
  loggedIn:boolean = false;

  login(user:User):boolean
  {
    if(user.userName=="bugra" && user.password == "12345"){
      this.loggedIn=true;
      localStorage.setItem('loggedIn',"true"); 
      localStorage.setItem('loggedUser',user.userName); 
      return true;
    }

    return false;
  }

  isLoggedIn():boolean
  {
    return this.loggedIn;
  }

  logOut(){
    localStorage.removeItem("loggedUser");
    this.loggedIn=false;
    localStorage.setItem("loggedIn","false");
  }
}
