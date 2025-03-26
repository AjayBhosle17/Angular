import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {

  student:any;
  message:string="Data Load SuccessFully"

  constructor( userservice:UserService){
    // this.student=[
    //   {id:1,name:'Ajay',username:'ab',email:'ab@gmail.com'},
    //   {id:2,name:'Manjiri',username:'ab',email:'ab@gmail.com'},
    //   {id:3,name:'Datta',username:'ab',email:'ab@gmail.com'},

    // ]

    userservice.getUsers().subscribe(data=>{

      this.student=data;
    },error=>{

      this.message="Error To Loading Data";
    })
  }
}
