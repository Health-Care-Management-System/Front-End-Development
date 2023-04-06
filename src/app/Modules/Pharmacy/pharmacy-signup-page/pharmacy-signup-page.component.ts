import { Component, OnInit } from '@angular/core';
import {FormControl , FormGroup , FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-pharmacy-signup-page',
  templateUrl: './pharmacy-signup-page.component.html',
  styleUrls: ['./pharmacy-signup-page.component.css']
})
export class PharmacySignupPageComponent implements OnInit {

  constructor(private fb : FormBuilder) { }
  reactiveform !: FormGroup;
   passwordPtn ='^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,16}$'
   emailPtn = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
   mobNumberPattern = "^((\\+91-?)|0)?[0-9]{10}$"
   registerArray:any={};


  ngOnInit(): void {
  }
  
  onSubmit(){
    console.log(this.reactiveform.value)
    alert(this.registerArray)
  }


}
