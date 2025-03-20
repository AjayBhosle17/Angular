import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BindingComponent } from '../binding/binding.component';
import { PipesComponent } from '../component/pipes/pipes.component';
import { HomeComponent } from '../components/home/home.component';
import { UserDetailsComponent } from '../user-details/user-details.component';


let routes:Routes=[
  // {path:'',component:HomeComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'bind',component:BindingComponent},
  {path:'pipe',component:PipesComponent},
  {path:'home',component:HomeComponent},
  {path:'user/:id',component:UserDetailsComponent},
  {path:'**',component:BindingComponent},

]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
