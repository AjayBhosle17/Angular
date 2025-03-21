import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  Users:any;

  constructor() {

    this.Users=[
      {id:1,name:'Ajay',username:'ab',email:'ab@gmail.com'},
      {id:2,name:'Manjiri',username:'ab',email:'ab@gmail.com'},
      {id:3,name:'Datta',username:'ab',email:'ab@gmail.com'},
      {id:4,name:'Params',username:'ab',email:'ab@gmail.com'},


    ];
   }

  getUsers(){
    return [
      {id:1,name:'Ajay',username:'ab',email:'ab@gmail.com'},
      {id:2,name:'Manjiri',username:'ab',email:'ab@gmail.com'},
      {id:3,name:'Datta',username:'ab',email:'ab@gmail.com'},
      {id:4,name:'Params',username:'ab',email:'ab@gmail.com'},


    ];
  }

  addUser( id:any,name:string,username:string,email:string){

     let object={
      id:id,
      name:name,
      username:username,
      email:email
    }

    this.Users.push(object);
    console.log('Data is come');
  }
}
