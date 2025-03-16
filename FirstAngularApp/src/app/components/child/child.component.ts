import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  // ngOnInit(): void {
  //   this.sendData.emit(this.childData);
  // }

  @Input()
  receiveData:string|undefined;


  childData:string="Anjali";

  @Output()
  sendData:EventEmitter<string|undefined>=new EventEmitter<string|undefined>();

  sendDataToParent(){
    this.sendData.emit(this.childData);
  }
}
