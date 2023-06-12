import { Component, OnInit } from '@angular/core';
import {Doctor} from "../../Doctor/doctor";
import {DoctorService} from "../../Doctor/doctor.service";

@Component({
  selector: 'app-admin-doctor',
  templateUrl: './admin-doctor.component.html',
  styleUrls: ['./admin-doctor.component.css']
})
export class AdminDoctorComponent implements OnInit {

  constructor(private doc_ser:DoctorService) { }

  doctors:Doctor[] = [];
  ngOnInit(): void {
    this.doc_ser.getAllDoctors().subscribe(list =>{
      this.doctors = list;
    })
  }

  title = 'edowzori';
  sideBarOpen=true;

  leftToolBarToggler(){
    this.sideBarOpen=!this.sideBarOpen;
  }


  deleteDoctor(id: string) {
    this.doc_ser.deleteDoctor(id)
  }
}
