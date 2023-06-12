import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Prescription} from "./prescription";

@Injectable({
  providedIn: 'root'
})
export class PrescriptionService {

  private baseURL = "http://localhost:8080/api/prescription"
  constructor(private http:HttpClient) { }


  gePrescriptionCount(pharmacy_id:String,status:String):Observable<number>{
    return this.http.get<number>(`${this.baseURL}/statuscount/${pharmacy_id}/${status}`);
  }

  getPrescriptionList(pharmacy_id:String,responce_state:String):Observable<Prescription[]>{
    return this.http.get<Prescription[]>(`${this.baseURL}/list/${pharmacy_id}/${responce_state}`);
  }

  changePrescriptionStatus(pharmacy_id: String, prescription_id: String, responce_state: String) {
    console.log(pharmacy_id + " " + prescription_id + " " + responce_state);
    this.http.put(`${this.baseURL}/changestatus/${pharmacy_id}/${prescription_id}/${responce_state}`, {})
      .subscribe(
        () => {
          // Handle success here
          console.log('Prescription status changed successfully');
        },
        (error) => {
          // Handle error here
          console.error('Error changing prescription status:', error);
        }
      );
  }

}
