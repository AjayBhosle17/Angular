import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BindingComponent } from '../binding/binding.component';
import { PipesComponent } from '../component/pipes/pipes.component';
import { HomeComponent } from '../components/home/home.component';
import { UserDetailsComponent } from '../user-details/user-details.component';
import { ElectronicsComponent } from '../component/electronics/electronics.component';
import { MobilesComponent } from '../component/mobiles/mobiles.component';
import { LaptopsComponent } from '../component/laptops/laptops.component';
import { EmployeeComponent } from '../service/employee/employee.component';
import { StudentComponent } from '../service/student/student.component';
import { ApiFetchComponent } from '../api-fetch/api-fetch.component';
import { CartComponent } from '../cart/cart/cart.component';
import { LoginComponent } from '../Form/login/login.component';
import { RegisterComponent } from '../Form/register/register.component';



let routes:Routes=[
  // {path:'',component:HomeComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'bind',component:BindingComponent},
  {path:'pipe',component:PipesComponent},
  {path:'home',component:HomeComponent},
  {path:'user/:id',component:UserDetailsComponent},
  {path:'electronics',component:ElectronicsComponent,
    children:[
      {path:'',redirectTo: 'mobiles', pathMatch: 'full'},
      {path:'mobiles',component:MobilesComponent},
      {path:'laptops',component:LaptopsComponent}
    ]
  },
  {path:'ApiFetch',component:ApiFetchComponent},
  {path:'Employee',component:EmployeeComponent},
  {path:'Student',component:StudentComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  { path: 'cart', component:CartComponent,
    
    loadChildren: () => import('../cart/cart.module').then(m => m.CartModule) },

  {path:'**',component:BindingComponent},
  

]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})


export class AppRoutingModule { }
