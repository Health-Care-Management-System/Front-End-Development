import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';






@Component({
  selector: 'app-selecthosital-selectdoctor',
  templateUrl: './selecthosital-selectdoctor.component.html',
  styleUrls: ['./selecthosital-selectdoctor.component.css'],

})
export class SelecthositalSelectdoctorComponent implements OnInit {
  formatLabel(value: number): string {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return `${value}`;
  }
  heading="Asiri Hositals";
  discription="With Medicare services you will receive the best medical treatment in your home. Our team of skilled medical professionals and aids ensure that you get the care you need and deserve."
  add1include="24 hours services" ;
  add1content="lorem ipsum dolor sit amet,connector adicipafg"
  add2include="10 years of experience";
  add2content="lorem ipsum dolor sit amet,connector adicipafg";
  myimage1:string="assets\images\asiri background.png";
  myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions!: Observable<string[]>;

  constructor() { }
  title = 'edowzori';
  sideBarOpen=true;
  ngOnInit(): void { this.filteredOptions = this.myControl.valueChanges.pipe(
    startWith(''),
    map(value => this._filter(value || '')),
  );
}
leftToolBarToggler(){
  this.sideBarOpen=!this.sideBarOpen;
 }
private _filter(value: string): string[] {
  const filterValue = value.toLowerCase();

  return this.options.filter(option => option.toLowerCase().includes(filterValue));
    
  }
 

}
