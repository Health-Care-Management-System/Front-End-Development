import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Doctor} from "../Doctor/doctor";

@Injectable({
  providedIn: 'root'
})


export class AdminService {

  private baseURL = "http://localhost:8080"

  constructor(private httpClient:HttpClient) {}

  getDoctorCount():Observable<number>{
    return this.httpClient.get<number>(`${this.baseURL}/api1/getDoctorCount`);
  }

  getPatientCount():Observable<number>{
    return this.httpClient.get<number>(`${this.baseURL}/api/patient/countAll`);
  }

  getHospitalCount():Observable<number>{
    return this.httpClient.get<number>(`${this.baseURL}/apihospital/getHospitalCount`);
  }

  gePharmacyCount():Observable<number>{
    return this.httpClient.get<number>(`${this.baseURL}/apipharmacy/getPharmacyCount`);
  }

}
