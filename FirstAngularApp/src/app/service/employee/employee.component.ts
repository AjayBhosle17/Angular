import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {

  employee:any;
  message:string="Data Load Successfully";

  constructor(private userservice:UserService){
    // this.employee=[
    //   {id:1,name:'Ajay',username:'ab',email:'ab@gmail.com'},
    //   {id:2,name:'Manjiri',username:'ab',email:'ab@gmail.com'},
    //   {id:3,name:'Datta',username:'ab',email:'ab@gmail.com'},

    // ]

    //this.employee=userservice.getUsers();

    userservice.getUsers().subscribe(data=>{

      this.employee=data;
    },error=>{

      this.message="Error To Loading Data";
    });


  }

  addUser(id:any,name:string,username:string,email:string ){

    this.userservice.addUser(id,name,username,email);

  }
} 
