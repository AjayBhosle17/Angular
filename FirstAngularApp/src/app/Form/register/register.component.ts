import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  studentForm!: FormGroup;

  // constructor() {
  //   this.studentForm = new FormGroup({
  //     firstname: new FormControl('', [Validators.required, Validators.minLength(3)]),
  //     lastname: new FormControl('', [Validators.required, Validators.minLength(3)]),
  //     email: new FormControl('', [Validators.required, Validators.email]),
  //     password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  //     confirmPassword: new FormControl('', [Validators.required])
  //   });
  // }



  // using FormBuilder
  
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.studentForm = this.formBuilder.group(
      {
        firstname: ['', [Validators.required, Validators.minLength(3)]],
        lastname: ['', [Validators.required, Validators.minLength(3)]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', [Validators.required]]
      }
    );
  }

  // ngOnInit() {
  //   this.loadFormData();
  // }

  loadFormData() {
    
    const defaultData = {
      firstname: 'Ajay',
      lastname: 'Bhosle',
      email: 'ajaybhosle@gmail.com',
      password: '123456',
      confirmPassword: '123456'
    };
    this.studentForm.setValue(defaultData);
  }

  onSubmit() {
    if (this.studentForm.valid) {
      console.log('Form Submitted:', this.studentForm.value);
      this.resetForm();
    } else {
      console.log('Form is invalid');
    }
  }

  resetForm() {
    this.studentForm.reset();
  }
  Load(){
    this.loadFormData();
  }
}
