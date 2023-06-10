import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Doctor} from "./doctor";
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  private baseURL = "http://localhost:8080/api/doctors"

  constructor(private httpclient:HttpClient) { }

  getDoctorbyID(id: String):Observable<Doctor>{
    return this.httpclient.get<Doctor>(`${this.baseURL}/${id}`);
  }

  updateDoctorColumn(id: String, column: string, data: string): void {
    const url = `${this.baseURL}/${id}/${column}/${data}`;
    this.httpclient.put(url, null).subscribe();
  }

  uploadPhoto(id: String, photo: FormData): Observable<any> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    return this.httpclient.post(`${this.baseURL}/${id}/photo`, photo, { headers: headers });
  }

}
