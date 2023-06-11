import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Hospital } from './hospital';

@Injectable({
  providedIn: 'root'
})

export class HospitalService {

  constructor(private httpclient:HttpClient) { }

  getAppoinmentDetails(){
    return this.httpclient.get("http://localhost:8080/api/getAppoinmentDetails");
  }

  getHospitals(){
    return this.httpclient.get("http://localhost:8080/api/getHospitals");
  }

  getHospitalDetailsById(hospitalid:number){
    return this.httpclient.get<Hospital>(`http://localhost:8080/api/getHospitalDetailsById/${hospitalid}`);

  }

  updateHospital(hospital :Hospital){
    return this.httpclient.put("http://localhost:8080/api/updateHospital" ,hospital);
  }

  deleteHospital(hospitalid: number){
    return this.httpclient.delete("http://localhost:8080/api/deleteHospital" + hospitalid);
  }
}
