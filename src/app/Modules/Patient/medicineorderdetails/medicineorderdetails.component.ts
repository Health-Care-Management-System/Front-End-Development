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
    this.getdeletedAppoinments();
    
  
   
    
  }

  loadAppoinments() {
    this.http.get<any[]>('http://localhost:8070/apiappoinment/all').subscribe(
      (data: any[]) => {
        this.appoinments = data;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
  getdeletedAppoinments() {
    this.http.get<any[]>('http://localhost:8070/apiappoinmentdeleted/all').subscribe(
      (data: any[]) => {
        this.myappoinments = data;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
  deleteAppoinment(index: number) {
    const appoinmentId = this.appoinments[index].id; // Assuming the appointment has an 'id' property
    const deletedAppoinment = this.appoinments.splice(index, 1)[0];
    

    this.http.delete(`http://localhost:8070/apiappoinment/delete/${appoinmentId}`).subscribe(
      () => {
        console.log('Appoinment deleted successfully.');
        // Remove the appointment from the array
        
        this.http.post('http://localhost:8070/apiappoinmentdeleted/add', deletedAppoinment).subscribe(
          () => {
            console.log('Deleted appointment sent to another table successfully.');
            this.getdeletedAppoinments();
          },
          (error: any) => {
            console.log('Error sending deleted appointment to another table:', error);
          }
        );
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
