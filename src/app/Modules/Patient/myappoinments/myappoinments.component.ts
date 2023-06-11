import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, concatMap, finalize, forkJoin, from } from 'rxjs';
import { Router } from '@angular/router';


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

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.loadAppoinments();
    this.getdeletedAppoinments();
    this.getexpiredAppoinments();

    // this.deleteExpiredAppoinments();
    
  }

  editAppoinment(appoinment: any): void {
    // Assuming you have separate input fields for updating the date and time
    const updatedDate = prompt('Enter the updated appointment date:');
    const updatedTime = prompt('Enter the updated appointment time:');

    if (updatedDate !== null && updatedTime !== null) {
      const updatedAppoinment = {
        id: appoinment.id,
        bookingDate: updatedDate,
        bookingTime: updatedTime,
        searchText: appoinment.searchText,
        phone: appoinment.phone
      };

      this.updateAppointment(updatedAppoinment);
    }
  }

  updateAppointment(appointment: any): void {
    this.http.put<any>(`http://localhost:8080/apiappoinment/${appointment.id}`, appointment)
      .subscribe(
        (data) => {
          console.log('Appointment updated successfully', data);
          // Handle success, e.g., show a success message or navigate to a different page
        },
        (error) => {
          console.error('Error updating appointment', error);
          // Handle error, e.g., show an error message
        }
      );
  }
  loadAppoinments() {
    this.http.get<any[]>('http://localhost:8080/apiappoinment/all').subscribe(
      (data) => {
        this.appoinments = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getdeletedAppoinments() {
    this.http.get<any[]>('http://localhost:8080/apiappoinmentdeleted/all').subscribe(
      (data) => {
        this.myappoinments = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  getexpiredAppoinments() {
    this.http.get<any[]>('http://localhost:8080/apiappoinmentexpired/all').subscribe(
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

    this.http.post('http://localhost:8080/apiappoinmentdeleted/add', deletedAppoinment).subscribe(
      () => {
        console.log('Appointment saved to another table successfully.');




      },
      (error) => {
        console.log('Error saving appointment to another table:', error);
      }

    );

    this.http.delete(`http://localhost:8080/apiappoinment/delete/${appoinmentId}`).subscribe(
          () => {

            console.log('Appointment deleted successfully.');
            // Remove the appointment from the array

            this.loadAppoinments();

          },
          (error) => {
            console.log('Error deleting appointment:', error);
            // Revert the changes by adding the deleted appointment back to the array
            this.appoinments.splice(index, 0, deletedAppoinment);
          }
        );

        location.reload();
  }

  // deleteExpiredAppoinments(): void {
    
  //   const currentDate = new Date().getTime(); // Get the current date and time in milliseconds
  //   const expiredAppoinments: any[] = [];
  
  //   for (let i = 0; i < this.appoinments.length; i++) {
  //     const appoinment = this.appoinments[i];
  //     const bookingDateTime = new Date(appoinment.bookingDate + ' ' + appoinment.bookingTime).getTime();
  
  //     if (bookingDateTime < currentDate) {
  //       expiredAppoinments.push(appoinment);
  //       this.appoinments.splice(i, 1); // Remove expired appointment from the array
  //       i--; // Decrement the index to adjust for the removed element
  //     }
  //   }
  
  //   if (expiredAppoinments.length > 0) {
  //     this.sendExpiredAppoinments(expiredAppoinments)
  //       .pipe(
  //         concatMap(() => this.deleteAppoinmentsFromServer(expiredAppoinments))
  //       )
  //       .subscribe(
  //         () => {
  //           console.log('Expired appointments deleted successfully');
  //           location.reload();
  //         },
  //         error => {
  //           console.error('Error while deleting expired appointments:', error);
  //         }
  //       );
  //   }
  // }
  // sendExpiredAppoinments(expiredAppoinments: any[]): Observable<any> {
  //   return this.http.post('http://localhost:8080/apiappoinmentexpired/add', expiredAppoinments);
  // }
  
  // deleteAppoinmentsFromServer(appoinments: any[]): Observable<any> {
  //   const deleteRequests = appoinments.map(appoinment => {
  //     const deleteUrl = `http://localhost:8080/apiappoinment/delete/${appoinment.id}`;
  //     return this.http.delete(deleteUrl);
  //   });
  
  //   return from(deleteRequests).pipe(
  //     concatMap(deleteRequest => deleteRequest),
  //     finalize(() => console.log('Appointments deleted successfully'))
  //   );
  // }

  leftToolBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
}
