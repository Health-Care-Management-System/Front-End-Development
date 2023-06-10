import { Time } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-showrequest',
  templateUrl: './showrequest.component.html',
  styleUrls: ['./showrequest.component.css']
})
export class ShowrequestComponent implements OnInit {



  appoinments: any;
  constructor(private http: HttpClient) { }

  title = 'edowzori';
  sideBarOpen=true;
  ngOnInit(){
    this.loadAppoinments();
  }
  leftToolBarToggler(){
   this.sideBarOpen=!this.sideBarOpen;
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
}
