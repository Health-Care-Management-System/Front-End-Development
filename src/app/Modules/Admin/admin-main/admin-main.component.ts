import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PatientService} from "../../Patient/patient.service";
import {Patient} from "../../Patient/patient";

@Component({
  selector: 'app-admin-main',
  templateUrl: './admin-main.component.html',
  styleUrls: ['./admin-main.component.css'],
})
export class AdminMainComponent implements OnInit {

  constructor(){};


  ngOnInit() {

  }

  title = 'edowzori';
  sideBarOpen=true;

  leftToolBarToggler(){
    this.sideBarOpen=!this.sideBarOpen;
  }

}
