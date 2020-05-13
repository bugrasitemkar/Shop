import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AccountService } from '../services/account.service';
import { User } from './user';
import { RouterModule, Routes, Router } from '@angular/router';

const routes: Routes = [
  { path: 'products', redirectTo: '/products', pathMatch: 'full' }
];
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  
})
export class LoginComponent implements OnInit {

  model:User=new User();
  constructor(private accountService:AccountService,private router: Router) { }

  ngOnInit() {
  }


  login(form:NgForm){
    let loggedIn = this.accountService.login(this.model)
    if(loggedIn)
    {
      this.router.navigate(['/products']);
    }
  }
}
