import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit {

  constructor() {
    // for keep navbar when scrolling in y axis
    window.addEventListener ('scroll' , function(){
      var matToolBar:any = document.querySelector("mat-toolbar");
      matToolBar.classList.toggle("sticky", window.scrollY>0);
    })
   }

  ngOnInit(): void {
  }

}
