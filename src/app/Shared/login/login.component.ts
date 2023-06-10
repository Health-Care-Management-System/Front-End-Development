import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {UserService} from "../../_service/user.service";
import {UserAuthService} from "../../_service/user-auth.service";
import {Router} from "@angular/router";



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {




  constructor(private fb : FormBuilder,private userService:UserService,
              private userAuthService:UserAuthService,
              private router:Router) { }

  reactiveform !: FormGroup;
  passwordPtn ='^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,16}$'

  registerArray:any={};


  ngOnInit(): void {
  }
  login(loginForm:NgForm){
    this.userService.login(loginForm.value).subscribe(
      (response:any)=>{
        this.userAuthService.setRoles(response.user.role);
        this.userAuthService.setToken(response.jwtToken);
        console.log(response)
        const role = response.user.role[0].roleName;
        if(role == 'Admin'){
          this.router.navigate(['/home'])
        }else{
          this.router.navigate(['/home'])
        }
      },
      (error)=>{
        console.log(error)
      }
    )
  }

}
