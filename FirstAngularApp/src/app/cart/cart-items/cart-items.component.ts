import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChange, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.css']
})
export class CartItemsComponent implements OnInit , OnChanges  ,AfterViewChecked , DoCheck,AfterContentInit ,AfterViewInit, AfterContentChecked ,OnDestroy{


  @Input()
  parentData:any;

  @Input()
  UserData:any;

  
  @ContentChild('parentHeading')
  parentHeading:any;

  @ViewChild('childHeading')
  childHeading:any;

  constructor(){
   
    console.log('Cart Items  Constructor Called');
  }
  ngOnDestroy(): void {
    console.log('unload COmponent');
  }

  ngAfterViewChecked(): void {

    
    console.log('ng after view checked () load');
    this.childHeading.nativeElement.style.color=this.parentData;
  }


  ngAfterViewInit(): void {
   
    console.log('ng after view Init () load');
    this.childHeading.nativeElement.style.color=this.parentData;

  }


  ngAfterContentChecked(): void {
    console.log(`ng After Content Checked ${this.parentHeading}`)
    console.log(this.parentHeading.nativeElement);

    this.parentHeading.nativeElement.style.color=this.parentData;  }

  ngAfterContentInit(): void {
    
    console.log(`ng After Content Init ${this.parentHeading}`)
    console.log(this.parentHeading.nativeElement);

    this.parentHeading.nativeElement.style.color=this.parentData;

    console.log('sun na')
    console.log(`sun na ${this.childHeading}`);
  }

 
  ngOnInit(): void {
    console.log('ngOnInit() get Called');

  }
  ngOnChanges(changes:SimpleChanges): void {
    console.log('ngOnChanges() get Called');
    console.log(changes);
  }

  ngDoCheck(): void {
    console.log('ngDoCheck() get Called');
    console.log(`UserData: ${this.UserData}`)
  }

  
  
}
