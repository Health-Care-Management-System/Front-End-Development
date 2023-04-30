import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ActivatedRoute } from '@angular/router';
import { debounceTime, map, Observable, startWith } from 'rxjs';

@Component({
  selector: 'app-make-an-apppoinment',
  templateUrl: './make-an-apppoinment.component.html',
  styleUrls: ['./make-an-apppoinment.component.css']
})
export class MakeAnApppoinmentComponent implements OnInit {
  searchText: any;
  sideBarOpen=true;
  districtControl=new FormControl('');

  districts: string[] = ['colombo', 'rathna', 'galle', 'badulla'];
  filteredDistricts: Observable<string[]> | undefined;


  books: any[] | undefined;
 
  filteredBooks: Observable<any[]> | undefined;
 
  streetControl = new FormControl('');
selectedBook: any;
  

 
  constructor(private route: ActivatedRoute,private http: HttpClient) {}
  // const id = this.route.snapshot.paramMap.get('id');
  //   this.http.get(`http://localhost:8070/api1/${id}`).subscribe((data) => {
  //     this.doctor = data;
  //   });
  // }
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
 
      this.http.get<any[]>(`http://localhost:8070/apihospital/52`).subscribe(
data => {
 
        this.books = data;
       
       
        
      });

    
    
    
  //   this.filteredBooks = this.streetControl.valueChanges.pipe(
  //   startWith(''),
  //   debounceTime(300),
  //   map(value => this._filter(value || '', this.books)),
  // );}
  
  // private _filter(value: string, books: any[]): any[] {
  //   const filterValue = value.toLowerCase();
  //   return this.books.filter(book => book.name.toLowerCase().includes(filterValue));
  // }
  // private _normalizeValue(value: string): string {
  //   return value.toLowerCase().replace(/\s/g, '');
  // }
    }
  
  leftToolBarToggler(){
    this.sideBarOpen=!this.sideBarOpen;
   }
 
  
}
