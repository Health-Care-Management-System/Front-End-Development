import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Doctor} from "./doctor";

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  private baseURL = "http://localhost:8080/api/doctors"
  constructor(private httpclient:HttpClient) { }

  getDoctorbyID(id: Number | undefined):Observable<Doctor>{
    return this.httpclient.get<Doctor>(`${this.baseURL}/${id}`);
  }
}
