import { Component, OnInit } from '@angular/core';
import {FormControl , Validators} from '@angular/forms';

@Component({
  selector: 'app-doctor-signup',
  templateUrl: './doctor-signup.component.html',
  styleUrls: ['./doctor-signup.component.css']
})
export class DoctorSignupComponent implements OnInit {

  user= {firstname:'' , lastname:'' , email:'' , id:'' , phonenumber:'' , address:'' , accept:false};
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
