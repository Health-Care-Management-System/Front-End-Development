import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medicineorderdetails',
  templateUrl: './medicineorderdetails.component.html',
  styleUrls: ['./medicineorderdetails.component.css']
})
export class MedicineorderdetailsComponent implements OnInit {
  appoinments: any[] = [];
  myappoinments:any[]=[];
  sideBarOpen = true;
  deletedAppoinments: any[] = [];


  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadAppoinments();

    
    
  
   
    
  }

  loadAppoinments() {
    this.http.get<any[]>('http://localhost:8080/api7/all').subscribe(
      (data: any[]) => {
        this.appoinments = data;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }


  leftToolBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
}
