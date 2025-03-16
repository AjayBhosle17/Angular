import { Component,Pipe } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {

  users=[
  {

    name:'Ajay',
    salary:23000,
    city:'pune',
    dob:'27/06/2002',
    speciality:'software Developer'
  },
  {

    name:'Vijay',
    salary:32000,
    city:'mumabi',
    dob:'18/02/2003',
    speciality:'software Developer'
  } ,
   {

    name:'shital',
    salary:87000,
    city:'Satara',
    dob:'17/03/2001',
    speciality:'software Developer'
  },
  {

    name:'Snehal',
    salary:3400,
    city:'pune',
    dob:'20/09/2004',
    speciality:'software Developer'
  }
]
}
