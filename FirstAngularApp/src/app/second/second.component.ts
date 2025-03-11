import { Component } from "@angular/core";

@Component({

    // selector:'app-second',
    // selector:'[app-second]',
    // selector:'.app-second'
    selector:'#app-second',

   // template:'<h2>Second Page</h2>',
   templateUrl:'./second.component.html',
    // styles:[`h2{
        
    //     color:blue;
    //     }`]
    styleUrls:['./second.component.css']

})

export class SecondComponent{

}