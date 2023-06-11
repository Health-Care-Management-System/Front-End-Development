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

  getDoctorbyID(id: Number):Observable<Doctor>{
    return this.httpclient.get<Doctor>(`${this.baseURL}/${id}`);
  }

  getAllDoctors(){
    return this.httpclient.get<Doctor[]>("http://localhost:8080/api/getAllDoctors");
  }

  updateDoctorColumn(id: number, column: string, data: string): void {
    const url = `${this.baseURL}/${id}/${column}/${data}`;
    this.httpclient.put(url, null).subscribe();
  }

  uploadPhoto(id: number, photo: FormData): Observable<any> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    return this.httpclient.post(`${this.baseURL}/${id}/photo`, photo, { headers: headers });
  }

  inviteDoctors(doc_id: any){
    return this.httpclient.get("http://localhost:8080/api/addToInvitationList/"+ doc_id);
  }

}
