import { NgSwitchDefault } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  passwordForm!: FormGroup;
  hide = false;
  hide2 = false;
    // hide: any;

 
// hide2: any;

  constructor(private fb: FormBuilder) { }

  title = 'edowzori';
  sideBarOpen=true;
  ngOnInit(){this.passwordForm = this.fb.group({
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required]
  }, { validator: this.checkPasswords });}
  leftToolBarToggler(){
   this.sideBarOpen=!this.sideBarOpen;
  }checkPasswords(group: FormGroup) {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
  
    return password === confirmPassword ? null : { notSame: true };
  }

  onSubmit() {
    // Handle form submission here
  }
}
