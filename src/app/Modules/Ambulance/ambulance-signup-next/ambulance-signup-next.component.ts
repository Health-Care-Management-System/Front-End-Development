import { Component, OnInit } from '@angular/core';
import {FormControl , FormGroup , FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-ambulance-signup-next',
  templateUrl: './ambulance-signup-next.component.html',
  styleUrls: ['./ambulance-signup-next.component.css']
})
export class AmbulanceSignupNextComponent implements OnInit {

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
