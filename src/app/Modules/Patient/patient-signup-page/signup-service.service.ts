import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SignupServiceService {
  private apiUrl = 'http://localhost:8080/signup'; // replace with your API endpoint
  constructor(private http: HttpClient) { }
  
  signup(data: any) {
    return this.http.post<any>(this.apiUrl, data);
  }
}
