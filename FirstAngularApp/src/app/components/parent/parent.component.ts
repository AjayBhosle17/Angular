import { Component,Output } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  parentData:string="Ajay Bhosle";


  childData:string|undefined;

  receiveChildData(data:any){
    this.childData=data;
  }

}
