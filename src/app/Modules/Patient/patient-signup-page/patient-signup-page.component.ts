import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl , FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-patient-signup-page',
  templateUrl: './patient-signup-page.component.html',
  styleUrls: ['./patient-signup-page.component.css']
})
export class PatientSignupPageComponent implements OnInit {

  
  constructor(private fb : FormBuilder) { }

  reactiveform !: FormGroup;
  passwordPtn ='^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,16}$'
  emailPtn = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
  registerArray:any={};

  ngOnInit(): void {
  }
  
  onSubmit(){
    console.log(this.reactiveform.value)
    alert(this.registerArray)
  }


}
