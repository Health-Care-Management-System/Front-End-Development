import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { speciality } from './specialities';

@Injectable({
  providedIn: 'root'
})
export class SelectoptionsService {

  private optionsUrl = "assets/selectoptions.json";

  // constructor(private http: HttpClient) { }
  constructor(){ }
  
  // getOptions(): Observable<string[]> {
  //   return this.http.get<string[]>(this.optionsUrl);
  // }
  getOptions():speciality[] {
    return[
      {code:'1' , name:'Allergy and Immunology'},
      {code:'2' , name:'Anesthesiology'},
      {code:'3' , name:'Dermatology'},
      {code:'4' , name:'Diagnostic radiology'},
      {code:'5' , name:'Emergency medicine'},
      {code:'6' , name:'Family medicine'},
      {code:'7' , name:'Internal medicine'},
      {code:'8' , name:'Medical genetics'},
      {code:'9' , name:'Neurology'},
      {code:'10' , name:'Nuclear medicine'},
      {code:'11' , name:'Obstetrics and gynecology'},
      {code:'12' , name:'Ophthalmology'},
      {code:'13' , name:'Pathology'},
      {code:'14' , name:'Pediatrics'},
      {code:'15' , name:'Physical medicine and Rehabilitation'},
      {code:'16' , name:'Preventive medicine'},
      {code:'17' , name:'Psychiatry'},
      {code:'18' , name:'Radiation oncology'},
      {code:'19' , name:'Surgery'},
      {code:'20' , name:'Urology'},
    ]

  }
}
