import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  serverUrl = "http://localhost:3000/"

  constructor(private http:HttpClient,private router:Router) { }

  loginAPI(email:any,password:any){
    this.http.get(`${this.serverUrl}/employee/1`).subscribe((result:any)=>{
      if(email==result.username && password==result.password){
        sessionStorage.setItem('admin',JSON.stringify(result))
        alert("Login Success")
        this.router.navigateByUrl('emppage')
      }else{
        alert("Invalid Email / Password !!")
      }
    })
  }

//   getAdminDetailsAPI(){
//     return this.http.get(`${this.serverUrl}/users/1`)
//   }

//   editAdminAPI(adminDetails:any){
//     return this.http.put(`${this.serverUrl}/users/1`,adminDetails)
//   }

// isLoggedin(){
//   return !!sessionStorage.getItem("admin")
// }
}
