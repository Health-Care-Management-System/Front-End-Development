import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { Patient } from './patient';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private baseURL = "http://localhost:8080/api/all"

  constructor(private httpclient:HttpClient) { }

  getPatientbyID(id: Number):Observable<Patient>{
    return this.httpclient.get<Patient>(`${this.baseURL}/${id}`);
  }

  updatePatientColumn(id: number, column: string, data: string): void {
    const url = `${this.baseURL}/${id}/${column}/${data}`;
    this.httpclient.put(url, null).subscribe();
  }

  uploadPhoto(id: number, photo: FormData): Observable<any> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    return this.httpclient.post(`${this.baseURL}/${id}/photo`, photo, { headers: headers });
  }
}
