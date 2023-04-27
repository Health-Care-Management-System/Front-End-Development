import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-doctorprofileforpatient',
  templateUrl: './doctorprofileforpatient.component.html',
  styleUrls: ['./doctorprofileforpatient.component.css']
})
export class DoctorprofileforpatientComponent implements OnInit {
  doctor: any;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.http.get(`http://localhost:8070/api1/${id}`).subscribe((data) => {
      this.doctor = data;
    });
  }

}
