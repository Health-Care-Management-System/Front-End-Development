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
  passwordPtn ='^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,16}$'
  
  registerArray:any={};
  

  ngOnInit(): void {  this.registerArray.username="sd";
  this.registerArray.password="wwww";
  }
  onSubmit(){
    console.log(this.reactiveform.value)
    alert(this.registerArray)
  }

}
