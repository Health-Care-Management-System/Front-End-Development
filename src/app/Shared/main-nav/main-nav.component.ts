import { Component, OnInit } from '@angular/core';
import *as AOS from 'aos';
import {UserAuthService} from "../../_service/user-auth.service";
import {Router} from "@angular/router";
import {UserService} from "../../_service/user.service";

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit {

  constructor(private userAuthService:UserAuthService,
              private router:Router,
              public userService:UserService) {
    // for keep navbar when scrolling in y axis
    // window.addEventListener ('scroll' , function(){
    //   var matTolBar:any = document.querySelector("mat-toolbar");
    //   matToolBar.classList.toggle("sticky", window.scrollY>0);
    // })

    window.addEventListener('scroll' , function(){
      var matToolBar = document.querySelector("mat-toolbar");
      matToolBar?.classList.toggle("sticky" , window.scrollY>0);
    })
  }

  ngOnInit(): void {
  }

  public isLoggedIn(){
    return this.userAuthService.isLoggedIn();
  }

  public logout(){
    this.userAuthService.clear();
    this.router.navigate(['/home'])
  }

}
