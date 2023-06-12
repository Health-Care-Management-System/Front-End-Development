import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Pharmacy} from "./pharmacy";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PharmacyService {

  private baseURL = "http://localhost:8080/api/pharmacy"
  constructor(private http:HttpClient) { }


  savePharmacy(data: any): Observable<any> {
    // const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(`${this.baseURL}/savepharmacy`, data);
  }

  // getCount(status:string):Observable<any>{
  //   return null;
  // }


}
