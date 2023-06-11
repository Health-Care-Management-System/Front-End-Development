import { Component, OnInit } from '@angular/core';
import { HospitalService } from '../../../hospital.service';

@Component({
  selector: 'app-new-appoinment',
  templateUrl: './new-appoinment.component.html',
  styleUrls: ['./new-appoinment.component.css']
})
export class NewAppoinmentComponent implements OnInit {

  displayedColumns: string[] = ['appoinment_ID','pat_ID', 'pat_name','pat_email', 'doc_id', 'doc_name', 'time' , 'actions1' , 'actions2'];

  appoinmentDetails: any[]= [];

  constructor(private hospitalservice: HospitalService) { }

  ngOnInit(): void {
    this.getAppoinmentDetails();
  }

  getAppoinmentDetails(){
    this.hospitalservice.getAppoinmentDetails().subscribe(
      (response: any) => {
        console.log(response);
        this.appoinmentDetails = response;
      }, (error) =>{
        console.log(error);
      }
    );
    
  }
  
}
