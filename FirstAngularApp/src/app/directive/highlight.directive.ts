import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  constructor(private element:ElementRef,private renderer:Renderer2) { 

    // let selectedElement= element.nativeElement;
    // renderer.setStyle(selectedElement,"background-color","red");
  
  }

  @HostListener('mouseenter')
  onmouseover(){

    let selectedElement=this.element.nativeElement;
    this.renderer.setStyle(selectedElement,"background-color","green");

  }
  @HostListener('mouseleave')

  onmouseout(){
    let selectedElement=this.element.nativeElement;
    this.renderer.setStyle(selectedElement,"background-color","yellow");
  }
}
