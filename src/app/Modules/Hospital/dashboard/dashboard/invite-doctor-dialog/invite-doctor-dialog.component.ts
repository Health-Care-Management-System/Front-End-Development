import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/Modules/Doctor/doctor';
import { DoctorService } from 'src/app/Modules/Doctor/doctor.service';

@Component({
  selector: 'app-invite-doctor-dialog',
  templateUrl: './invite-doctor-dialog.component.html',
  styleUrls: ['./invite-doctor-dialog.component.css']
})
export class InviteDoctorDialogComponent implements OnInit {

  displayedColumns: string[] = ['Id', 'SLMC Number', 'Doctor Name', 'Working Experience','Doctor Email' , 'Contact Number' , 'Invite'];
  doctorDetails: Doctor[] = [];

  constructor(private doctorService: DoctorService) { }

  ngOnInit(): void {
    this.getAllDoctors();
  }

  public getAllDoctors(){
    this.doctorService.getAllDoctors().subscribe(
      (response:Doctor[]) => {
       // console.log(response);
        this.doctorDetails = response;
      }, (error: HttpErrorResponse) =>{
        console.log(error);
      }
    );
  }

  inviteDoctors(doc_id: any){
   this.doctorService.inviteDoctors(doc_id).subscribe(
    (response) => {
      console.log(response);
    }, (error) =>{
      console.log(error);
    }
   );
  }

}
