import { style } from '@angular/animations';
import { AfterViewInit, Component,ElementRef,Output, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements AfterViewInit {
  
  parentData:string="Ajay Bhosle";


  childData:string |undefined;

  receiveChildData(data:any){
    this.childData=data;
  }

  // contentRead(){

  //   let data = document.getElementById('heading1');

  //   console.log(data);

  // }


  // element select  like getelement by id 

  @ViewChild('demo')
  demo?:ElementRef;

  @ViewChildren('para')
  para?:any;

  ngAfterViewInit(): void {
    console.log(this.demo);
    this.demo?.nativeElement.setAttribute('style','color:red;');

    console.log(this.para);
    this.para?.first.nativeElement.setAttribute('style','color:blue');
    this.para?.last.nativeElement.setAttribute('style','color:pink');


    for(let p of this.para){

      p.nativeElement.setAttribute('style','color:blue');
      p.nativeElement.innertext='paragraph text changeed';

  }

  }
  
}
