import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-ambulence',
  templateUrl: './admin-ambulence.component.html',
  styleUrls: ['./admin-ambulence.component.css']
})
export class AdminAmbulenceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = 'edowzori';
  sideBarOpen=true;

  leftToolBarToggler(){
    this.sideBarOpen=!this.sideBarOpen;
  }


}
