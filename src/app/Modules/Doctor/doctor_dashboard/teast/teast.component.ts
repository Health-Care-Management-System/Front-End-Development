import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-teast',
  templateUrl: './teast.component.html',
  styleUrls: ['./teast.component.css']
})
export class TeastComponent implements OnInit {
  text1="Asiri Hospitals";
  text2="Kandy";
  text3="230 Reviews";
  myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions!: Observable<string[]>;
showimage:boolean;


  constructor() {this.showimage=false;
  
}ngOnInit(): void {
  throw new Error('Method not implemented.');
}
 }

 




