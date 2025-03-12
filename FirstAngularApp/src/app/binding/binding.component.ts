import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})

export class BindingComponent {

    name:string="Ajay Bhosle";
    name1:string="";
    hiddenfield=true;


    print(){
      this.name="Vijay Bhosle";
    }
    greet(){

      this.name1="Welcome in Angular"
    }
}
