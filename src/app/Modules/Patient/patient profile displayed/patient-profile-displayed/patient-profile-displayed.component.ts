import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-profile-displayed',
  templateUrl: './patient-profile-displayed.component.html',
  styleUrls: ['./patient-profile-displayed.component.css']
})
export class PatientProfileDisplayedComponent implements OnInit {

  constructor() { }

  title = 'edowzori';
  sideBarOpen=true;
  ngOnInit(){}
  leftToolBarToggler(){
   this.sideBarOpen=!this.sideBarOpen;
  }
}
