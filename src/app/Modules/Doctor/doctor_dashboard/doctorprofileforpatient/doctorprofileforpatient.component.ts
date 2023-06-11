import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';




interface Availability {
  name: string;
  available: boolean;
  timeInterval: string;
}
@Component({
  selector: 'app-doctorprofileforpatient',
  templateUrl: './doctorprofileforpatient.component.html',
  styleUrls: ['./doctorprofileforpatient.component.css']
})
export class DoctorprofileforpatientComponent implements OnInit {
[x: string]: any;
  doctor: any;
  hospital: any;
  allbooks: any[] | undefined;
  books: any[] | undefined;

  daysOfWeek: Availability[] = [];
  retrievedData: Availability[] = [];


  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.retrieveData();
    const id = this.route.snapshot.paramMap.get('id');
    this.http.get(`http://localhost:8080/api1/${id}`).subscribe((data) => {
      this.doctor = data;
    });
    // this.http.get<any[]>('http://localhost:8080/apihospital/all').subscribe(
    //   data => {
    //     this.books = data;



    //   },
    //   error => {
    //     console.log(error);
    //   });
    // this.http.get(`http://localhost:8080/apihospital/all`).subscribe((data) => {
    //   this.hospital = data;
    // });
  }
  retrieveData() {
    this.http.get<Availability[]>(`http://localhost:8080/availability/all`)
      .subscribe((data) => {
        this.retrievedData = data;
      }, (error) => {
        console.error('Error retrieving data:', error);
      });
  }

}
