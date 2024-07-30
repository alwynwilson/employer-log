import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email:string = ""
  password:string = ""

  constructor(private adminAPI:ApiService){}

  login(){
    if(this.email && this.password){
      this.adminAPI.loginAPI(this.email,this.password)
    }else{
      alert("Please fill the form completely")
    }
  }
}
