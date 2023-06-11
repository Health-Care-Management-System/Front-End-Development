import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-pharmacy',
  templateUrl: './admin-pharmacy.component.html',
  styleUrls: ['./admin-pharmacy.component.css']
})
export class AdminPharmacyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = 'edowzori';
  sideBarOpen=true;

  leftToolBarToggler(){
    this.sideBarOpen=!this.sideBarOpen;
  }


}
