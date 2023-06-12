import { Component, OnInit } from '@angular/core';
import { newcomponentdata } from '../new/newdata';
import {HttpClient} from "@angular/common/http";
import {Prescription} from "../prescription";
import {PrescriptionService} from "../prescription.service";


@Component({
  selector: 'app-approved',
  templateUrl: './approved.component.html',
  styleUrls: ['./approved.component.css']
})
export class ApprovedComponent implements OnInit {

  constructor(private http:HttpClient,private prescription_service:PrescriptionService) { }

  // @ts-ignore
  approved_prescription:Prescription[];

  pid:String = 'PH001';
  approved : number | undefined;


  ngOnInit(): void {
    this.prescription_service.getPrescriptionList(this.pid,"approved").subscribe(data =>{
      console.log(data);
      this.approved_prescription = data;
    });

    this.prescription_service.gePrescriptionCount(this.pid,"approved").subscribe(data =>{
      this.approved = data;
    });
  }

  reject_prescription(prescription_id:String){
    this.prescription_service.changePrescriptionStatus(this.pid,prescription_id,"rejected");
  }

  makedone_prescription(prescription_id: String) {
    this.prescription_service.changePrescriptionStatus(this.pid,prescription_id,"done");
  }
}
