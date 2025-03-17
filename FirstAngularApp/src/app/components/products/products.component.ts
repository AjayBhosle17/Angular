import { AfterViewInit, Component, ContentChild, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements AfterViewInit {



  @Input()
  receiveProduct:any[]=[];

  @ViewChild('tableHeading')
  tableHeading: any;

  ngAfterViewInit(): void {
    
    this.tableHeading.nativeElement.setAttribute('style','background-color:yellow')

    this.projectedHead.nativeElement.setAttribute('style','background-color:red')
  }


  // projected content into child componenet
  // content child

  @ContentChild('projectedHead')
  projectedHead:any;




}
