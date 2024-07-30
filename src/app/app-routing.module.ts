import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EmpPageComponent } from './emp-page/emp-page.component';


const routes: Routes = [
  {
    path:'', component:LoginComponent
  },
  {
    path:'emppage', component:EmpPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
