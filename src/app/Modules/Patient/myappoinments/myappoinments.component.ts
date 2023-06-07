import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-myappoinments',
  templateUrl: './myappoinments.component.html',
  styleUrls: ['./myappoinments.component.css']
})
export class MyappoinmentsComponent implements OnInit {
  appoinments: any[] = [];
  myappoinments: any[] = [];
  sideBarOpen = true;
  deletedAppoinments: any[] = [];
  expiredappoinments: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadAppoinments();
    this.getdeletedAppoinments();
    this.getexpiredAppoinments();
  }

  loadAppoinments() {
    this.http.get<any[]>('http://localhost:8070/apiappoinment/all').subscribe(
      (data) => {
        this.appoinments = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getdeletedAppoinments() {
    this.http.get<any[]>('http://localhost:8070/apiappoinmentdeleted/all').subscribe(
      (data) => {
        this.myappoinments = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  getexpiredAppoinments() {
    this.http.get<any[]>('http://localhost:8070/apiappoinmentexpired/all').subscribe(
      (data) => {
        this.expiredappoinments = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  deleteAppoinment(index: number) {
    const appoinmentId = this.appoinments[index].id; // Assuming the appointment has an 'id' property
    const deletedAppoinment = this.appoinments.splice(index, 1)[0];
  
    this.http.post('http://localhost:8070/apiappoinmentdeleted/add', deletedAppoinment).subscribe(
      () => {
        console.log('Appointment saved to another table successfully.');

     
  
        
      },
      (error) => {
        console.log('Error saving appointment to another table:', error);
      }
      
    );

    this.http.delete(`http://localhost:8070/apiappoinment/delete/${appoinmentId}`).subscribe(
          () => {
            
            console.log('Appointment deleted successfully.');
            // Remove the appointment from the array
            
            this.loadAppoinments();
            window.location.reload();
          },
          (error) => {
            console.log('Error deleting appointment:', error);
            // Revert the changes by adding the deleted appointment back to the array
            this.appoinments.splice(index, 0, deletedAppoinment);
          }
        );
  }
  deleteExpiredAppoinments(): void {
    const currentDate = new Date(); // Get the current date and time
    const expiredAppoinments: any[] = [];
  
    this.appoinments = this.appoinments.filter(appoinment => {
      const bookingDateTime = new Date(appoinment.bookingDate + ' ' + appoinment.bookingTime);
  
      if (bookingDateTime < currentDate) {
        expiredAppoinments.push(appoinment);
        return false; // Remove expired appointments from the appointments array
      }
  
      return true; // Keep non-expired appointments in the appointments array
    });
  
    if (expiredAppoinments.length > 0) {
      this.sendExpiredAppoinments(expiredAppoinments);
      this.deleteAppoinmentsFromServer(expiredAppoinments);
    }
  }
  
  sendExpiredAppoinments(expiredAppoinments: any[]): void {
    this.http.post('http://localhost:8070/api/appoinmentexpired/add', expiredAppoinments)
      .subscribe(
        response => {
          console.log('Expired appointments sent to the new table successfully:', response);
        },
        error => {
          console.error('Error while sending expired appointments to the new table:', error);
        }
      );
  }
  
  deleteAppoinmentsFromServer(appoinments: any[]): void {
    const deleteRequests = appoinments.map(appoinment => {
      const deleteUrl = `http://localhost:8070/api/appoinment/delete/${appoinment.id}`;
      return this.http.delete(deleteUrl);
    });
  
    forkJoin(deleteRequests).subscribe(
      () => {
        console.log('Appointments deleted successfully');
      },
      error => {
        console.error('Error while deleting appointments:', error);
      }
    );
  }

  leftToolBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
}