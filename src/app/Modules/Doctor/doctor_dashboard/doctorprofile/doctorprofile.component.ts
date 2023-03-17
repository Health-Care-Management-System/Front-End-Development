import { Component, OnInit } from '@angular/core';
import {Doctor} from "../../doctor";
import {ActivatedRoute} from "@angular/router";
import {DoctorService} from "../../doctor.service";

@Component({
  selector: 'app-doctorprofile',
  templateUrl: './doctorprofile.component.html',
  styleUrls: ['./doctorprofile.component.css']
})
export class DoctorprofileComponent implements OnInit {

  id: Number | undefined;
  // @ts-ignore
  doctor : Doctor;

  constructor(private route:ActivatedRoute,private doct_service:DoctorService) { }

  ngOnInit(): void{
    this.id = 1;
    // @ts-ignore
    this.doctor = new Doctor();
    this.doct_service.getDoctorbyID(this.id).subscribe(data =>{
      this.doctor = data;
    });
  }
  title = 'edowzori';
  sideBarOpen=true;
  leftToolBarToggler(){
    this.sideBarOpen=!this.sideBarOpen;
  }



}
