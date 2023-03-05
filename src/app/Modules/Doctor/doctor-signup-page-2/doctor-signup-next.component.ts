import { Component, OnInit } from '@angular/core';
import {FormControl , FormGroup , FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-doctor-signup-next',
  templateUrl: './doctor-signup-next.component.html',
  styleUrls: ['./doctor-signup-next.component.css']
})
export class DoctorSignupNextComponent implements OnInit {

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
