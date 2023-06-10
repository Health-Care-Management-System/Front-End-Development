import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class HospitalService {

  constructor(private httpclient:HttpClient) { }

  getAppoinmentDetails(){
    return this.httpclient.get("http://localhost:8080/api/getAppoinmentDetails");
  }
}
