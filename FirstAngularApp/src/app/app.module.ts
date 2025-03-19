import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { BindingComponent } from './binding/binding.component';
import { FormsModule } from '@angular/forms';
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

let routes:Routes=[
  // {path:'',component:HomeComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'bind',component:BindingComponent},
  {path:'pipe',component:PipesComponent},
  {path:'home',component:HomeComponent},
  {path:'**',component:BindingComponent}
 
]



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

   
  ],
  imports: [
    BrowserModule,FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [RoutingComponent]
})
export class AppModule { }
