import { Component } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent {

  Name:string|undefined;
  color='red';

  headingStyle={
    'background-color':'blue',
    'color':'white',
    'border':"1px solid red"
  }

  // class
  important=false;
  veryImportant=true
  myclass={
    "important":this.important,
    "veryImp":this.veryImportant
  } 

  visible=false;

  names:string[]=["AB","VB","OB","MB"];
  searchName:string|undefined;

  students=[
    {
      rollNO:1,
      Name:"Ajay",
      city:"Ambajogai"
    }, {
      rollNO:2,
      Name:"Vijay",
      city:"Ambajogai"
    }, {
      rollNO:3,
      Name:"Om",
      city:"Ambajogai"
    },
    {
      rollNO:4,
      Name:"Madhuri",
      city:"Ambajogai"
    },
    {
      rollNO:5,
      Name:"VAishnavi",
      city:"Ambajogai"
    }
  ]
}

