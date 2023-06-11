import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hospitalprofileforpatient',
  templateUrl: './hospitalprofileforpatient.component.html',
  styleUrls: ['./hospitalprofileforpatient.component.css']
})
export class HospitalprofileforpatientComponent implements OnInit {

  doctor: any;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.http.get(`http://localhost:8080/apihospital/${id}`).subscribe((data) => {
      this.doctor = data;
    });
  }

}
