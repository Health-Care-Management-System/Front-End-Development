import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchdoctorcontent',
  templateUrl: './searchdoctorcontent.component.html',
  styleUrls: ['./searchdoctorcontent.component.css']
})
export class SearchdoctorcontentComponent implements OnInit {
  text1 = "Asiri Hospitals";
  text2 = "Kandy";
  text3 = "230 Reviews";

  options: string[] = ['One', 'Two', 'Three'];

  showimage: boolean;
  showimage2: boolean;
  showimage3: boolean;
  showimage4: boolean;
  showimage6: boolean;
  showimage5: boolean;


  constructor() {
    this.showimage = false;
    this.showimage2 = false;
    this.showimage3 = false;
    this.showimage4 = false;
    this.showimage5 = false;
    this.showimage6 = false;
  } ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}


