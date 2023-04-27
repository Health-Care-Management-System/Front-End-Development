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
  title = 'edowzori';
  sideBarOpen=true;

  constructor(private fb: FormBuilder) { }

  ngOnInit(){
    this.passwordForm = this.fb.group({
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, { validator: this.checkPasswords });
  }

  leftToolBarToggler(){
    this.sideBarOpen=!this.sideBarOpen;
  }

  checkPasswords(group: FormGroup) {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
  
    // Check if password and confirm password match
    if (password !== confirmPassword) {
      group.get('confirmPassword')?.setErrors({ notSame: true });
      return;
    }
  
    // Check if password is strong enough
    const passwordStrengthRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])/;
    const isPasswordStrongEnough = passwordStrengthRegex.test(password);
  
    if (!isPasswordStrongEnough) {
      group.get('password')?.setErrors({ notStrongEnough: true });
      return;
    }
  
    // Password is strong enough and matches confirm password
    return null;
  }

  onSubmit() {
    // Check if form is valid
    if (this.passwordForm.valid) {
      alert('Form submitted successfully');
      // Do whatever you want to do after form submission
    } else {
      alert('Form submission failed');
      // Handle form submission failure
    }
  }
}