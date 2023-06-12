import { Component, OnInit } from '@angular/core';
import { newcomponentdata } from '../new/newdata';
import {HttpClient} from "@angular/common/http";
import {PrescriptionService} from "../prescription.service";
import {Prescription} from "../prescription";

@Component({
  selector: 'app-rejected',
  templateUrl: './rejected.component.html',
  styleUrls: ['./rejected.component.css']
})
export class RejectedComponent implements OnInit {

  constructor(private http:HttpClient,private prescription_service:PrescriptionService) { }

  // @ts-ignore
  rejected_data:Prescription[];
  pid:String = 'PH001';
  rejected : number | undefined;

  ngOnInit(): void {

    this.prescription_service.getPrescriptionList(this.pid,"rejected").subscribe(data =>{
      console.log(data);
      this.rejected_data = data;
    });

    this.prescription_service.gePrescriptionCount(this.pid,"rejected").subscribe(data =>{
      this.rejected = data;
    });

  }

  approve_prescription(prescription_id:String){
    this.prescription_service.changePrescriptionStatus(this.pid,prescription_id,"approved");
  }
}
