import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { BindingComponent } from './binding/binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CompareComponent } from './compare/compare.component';
import { DirectiveComponent } from './directive/directive.component';
import { HighlightDirective } from './directive/highlight.directive';
import { PipesComponent } from './component/pipes/pipes.component';
import { AgePipe } from './pipes/age.pipe';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { RoutingComponent } from './routing/routing.component';
import {RouterModule, Routes } from '@angular/router';
import { UserDetailsComponent } from './user-details/user-details.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { ElectronicsComponent } from './component/electronics/electronics.component';
import { MobilesComponent } from './component/mobiles/mobiles.component';
import { LaptopsComponent } from './component/laptops/laptops.component';
import { EmployeeComponent } from './service/employee/employee.component';
import { StudentComponent } from './service/student/student.component';
import { ApiFetchComponent } from './api-fetch/api-fetch.component';
import { CartModule } from './cart/cart.module';
import { RegisterComponent } from './Form/register/register.component';
import { LoginComponent } from './Form/login/login.component';




@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    BindingComponent,
    CompareComponent,
    DirectiveComponent,
    HighlightDirective,
    PipesComponent,
    AgePipe,
    ParentComponent,
    ChildComponent,
    HomeComponent,
    ProductsComponent,
    RoutingComponent,
    UserDetailsComponent,
    ElectronicsComponent,
    MobilesComponent,
    LaptopsComponent,
    EmployeeComponent,
    StudentComponent,
    ApiFetchComponent,
    RegisterComponent,
    LoginComponent
    ],
  imports: [
    BrowserModule,FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
   // RouterModule
    // ,CartModule
  ],
  providers: [],
  bootstrap: [RoutingComponent]
})
export class AppModule { 

  constructor(){
    console.log('App Module is Loaded');
  }
}
