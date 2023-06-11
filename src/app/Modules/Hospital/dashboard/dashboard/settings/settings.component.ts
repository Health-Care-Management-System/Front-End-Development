import { Component, OnInit , ViewEncapsulation } from '@angular/core';
import { Hospital } from '../../../hospital';
import { HospitalService } from '../../../hospital.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],

})
export class SettingsComponent implements OnInit {


  constructor(private hospitalService: HospitalService) { }

  ngOnInit(): void {
    this.getHospitals();
  }


  id:number = 2;

  //@ts-ignore
  hospitalDetails : Hospital = new Hospital();


  updateHospital(){
    this.hospitalService.updateHospital(this.hospitalDetails).subscribe(
      (response) => {
        console.log(response);
      },
      (error:HttpErrorResponse) =>{
        console.log(error);
      }
    );
  }

  getHospitals(){
    this.hospitalService.getHospitalDetailsById(this.id).subscribe(
      (response) => {
        console.log(response);
        this.hospitalDetails = response;
      },
      (error:HttpErrorResponse) =>{
        console.log(error);
      }
    );
  }

  deleteHospital(id: any){
    this.hospitalService.deleteHospital(this.id).subscribe(
      (response ) => {
        console.log(response)
        this.getHospitals();
       },
       error =>{
         console.log(error);
       }
    );
  }

}
