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

}

