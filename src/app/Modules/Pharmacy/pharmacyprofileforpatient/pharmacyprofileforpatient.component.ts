import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pharmacyprofileforpatient',
  templateUrl: './pharmacyprofileforpatient.component.html',
  styleUrls: ['./pharmacyprofileforpatient.component.css']
})
export class PharmacyprofileforpatientComponent implements OnInit {

  doctor: any;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.http.get(`http://localhost:8080/apipharmacy/${id}`).subscribe((data) => {
      this.doctor = data;
    });
  }

}
