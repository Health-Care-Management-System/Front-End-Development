import { Component, OnInit } from '@angular/core';
import {FormControl , Validators} from '@angular/forms';

@Component({
  selector: 'app-patient-signup-page',
  templateUrl: './patient-signup-page.component.html',
  styleUrls: ['./patient-signup-page.component.css']
})
export class PatientSignupPageComponent implements OnInit {

  user= {username:''  , email:'' , password:'' , accept:false};
  email = new FormControl('', [Validators.required, Validators.email]);
  
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log('User:' , this.user);
  }
  getErrorEmailMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
}
