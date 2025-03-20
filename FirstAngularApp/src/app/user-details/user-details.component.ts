import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {

  id:any;
  constructor(route:ActivatedRoute , private router:Router){
    this.id=route.snapshot.params['id'];
  }

  backtoPage(){

    this.router.navigate(['/pipe'])
  }
}
