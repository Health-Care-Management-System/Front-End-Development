import { Component, OnInit } from '@angular/core';

import {FormBuilder, FormControl , FormGroup, Validators} from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  

  constructor(private fb : FormBuilder) { }
  
  reactiveform !: FormGroup;
  registerArray:any={};

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.reactiveform.value)
    alert(this.registerArray)
  }

}
