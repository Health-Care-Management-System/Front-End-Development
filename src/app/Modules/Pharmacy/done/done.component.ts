import { Component, OnInit } from '@angular/core';
import { newcomponentdata } from '../new/newdata';
import {Prescription} from "../prescription";
import {HttpClient} from "@angular/common/http";
import {PrescriptionService} from "../prescription.service";

@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.css']
})
export class DoneComponent implements OnInit {

  constructor(private http:HttpClient,private prescription_service:PrescriptionService) { }

  // @ts-ignore
  done_prescription:Prescription[];

  pid:String = 'PH001';
  done : number | undefined;

  ngOnInit(): void {

    this.prescription_service.getPrescriptionList(this.pid,"done").subscribe(data =>{
      console.log(data);
      this.done_prescription = data;
    });

    this.prescription_service.gePrescriptionCount(this.pid,"done").subscribe(data =>{
      this.done = data;
    });

  }

}
