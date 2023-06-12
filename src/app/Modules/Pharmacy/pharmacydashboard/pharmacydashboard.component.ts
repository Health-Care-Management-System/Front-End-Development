import { Component, OnInit } from '@angular/core';
import {Prescription} from "../prescription";
import {PrescriptionService} from "../prescription.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-pharmacydashboard',
  templateUrl: './pharmacydashboard.component.html',
  styleUrls: ['./pharmacydashboard.component.css']
})
export class PharmacydashboardComponent implements OnInit {

  constructor(private prescription_Service:PrescriptionService) { }

  sideBarOpen=true;

  newOrders: number|undefined ;
  approved: number|undefined ;
  rejected: number|undefined ;
  done: number|undefined ;

  pid:String = 'PH001';  // pharmacy id;

  ngOnInit(){
    this.prescription_Service.gePrescriptionCount(this.pid,"new").subscribe(data =>{
      this.newOrders = data;
    });
    this.prescription_Service.gePrescriptionCount(this.pid,"approved").subscribe(data =>{
      this.approved = data;
    });
    this.prescription_Service.gePrescriptionCount(this.pid,"rejected").subscribe(data =>{
      this.rejected = data;
    });
    this.prescription_Service.gePrescriptionCount(this.pid,"done").subscribe(data =>{
      this.done = data;
    });

  }
  leftToolBarToggler(){
    this.sideBarOpen=!this.sideBarOpen;
  }

}
