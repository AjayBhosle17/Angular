import { AfterViewInit, Component, ContentChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {

  
  

  mensProducts=[
    {
      Id:1,
      Name:'shirt 1',
      Price:300

    },
    {
      Id:2,
      Name:'shirt 2',
      Price:600

    },
    {
      Id:3,
      Name:'shirt 4',
      Price:870
    },
  ]

  kidsProducts=[
    {
      Id:1,
      Name:'kids 1',
      Price:300

    },
    {
      Id:2,
      Name:'kids 2',
      Price:600

    },
    {
      Id:3,
      Name:'kids 4',
      Price:870
    },
  ]


    // @ContentChild('projectedHead')
    // projectedHead:any;
    // // AfterViewInit(): void {
    // //   this.projectedHead.nativeElement.setAttribute('style','background-color:black')
    // // }

}
