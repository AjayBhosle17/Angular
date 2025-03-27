import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  someProperty:string | undefined='red';

  username:string='red'
  user:any={
    name:this.username,
    city:'Pune'
  }
}
