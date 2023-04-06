import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-patientpwchange',
  templateUrl: './patientpwchange.component.html',
  styleUrls: ['./patientpwchange.component.css']
})
export class PatientpwchangeComponent implements OnInit {
  passwordForm!: FormGroup;
  hide = false;
  hide2 = false;
  constructor(private fb: FormBuilder) { }

  title = 'edowzori';
  sideBarOpen=true;
  ngOnInit(){this.passwordForm = this.fb.group({
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required]
  }, { validator: this.checkPasswords });}
  leftToolBarToggler(){
   this.sideBarOpen=!this.sideBarOpen;
  }
  checkPasswords(group: FormGroup) {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
  
    return password === confirmPassword ? null : { notSame: true };
  }

  onSubmit() {
    // Handle form submission here
  }
}
