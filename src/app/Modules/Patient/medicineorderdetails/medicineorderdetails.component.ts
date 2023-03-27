import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medicineorderdetails',
  templateUrl: './medicineorderdetails.component.html',
  styleUrls: ['./medicineorderdetails.component.css']
})
export class MedicineorderdetailsComponent implements OnInit {

  constructor() { }

  title = 'edowzori';
  sideBarOpen=true;
  ngOnInit(){}
  leftToolBarToggler(){
   this.sideBarOpen=!this.sideBarOpen;
  }

}
