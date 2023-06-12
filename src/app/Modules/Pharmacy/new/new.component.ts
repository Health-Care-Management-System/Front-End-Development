import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PrescriptionService} from "../prescription.service";

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  sideBarOpen=true;

  leftToolBarToggler(){
    this.sideBarOpen=!this.sideBarOpen;
  }


  // @ts-ignore
  new_prescription:Prescription[];
  pid:String = 'PH001';
  new : number | undefined;

  constructor(private http:HttpClient,private prescription_service:PrescriptionService) { }

  ngOnInit(): void {
    this.prescription_service.getPrescriptionList(this.pid,"new").subscribe(data =>{
      console.log(data);
      this.new_prescription = data;
    });

    this.prescription_service.gePrescriptionCount(this.pid,"new").subscribe(data =>{
      this.new = data;
    });
  }

  approve_prescription(prescription_id:String){
    this.prescription_service.changePrescriptionStatus(this.pid,prescription_id,"approved");
  }

  reject_prescription(prescription_id:String){
    this.prescription_service.changePrescriptionStatus(this.pid,prescription_id,"rejected");
  }


}
