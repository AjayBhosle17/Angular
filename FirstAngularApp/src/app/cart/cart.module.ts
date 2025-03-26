import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { CartItemsComponent } from './cart-items/cart-items.component';
import { RouterModule, Routes } from '@angular/router';


let routes:Routes=[
{path:'',redirectTo:'cart',pathMatch:'full'},
{path:'cart',component:CartComponent}
]


@NgModule({
  declarations: [
    CartComponent,
    CartItemsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CartModule {

  constructor(){
    console.log('Cart Module is loaded')
  }
 }
