import { Component, OnInit } from '@angular/core';
import {FormControl , FormGroup , FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  constructor(private fb : FormBuilder) { }
  reactiveform !: FormGroup;
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
