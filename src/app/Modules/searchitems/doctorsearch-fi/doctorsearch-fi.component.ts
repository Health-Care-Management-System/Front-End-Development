import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
@Component({
  selector: 'app-doctorsearch-fi',
  templateUrl: './doctorsearch-fi.component.html',
  styleUrls: ['./doctorsearch-fi.component.css']
})
export class DoctorsearchFiComponent implements OnInit {

  showMore: boolean = false;
  catagory=['aeeeeee','beeeeee','ceeeee','deeeeeee']
 
  
  
  streetControl = new FormControl('');
  cityControl = new FormControl('');
  districtControl=new FormControl('');
  hospitalControl=new FormControl('');

  streets: string[] = ['Champs-Élysées', 'Lombard Street', 'Abbey Road', 'Fifth Avenue'];
  filteredStreets: Observable<string[]> | undefined;

  cities: string[] = ['balangoda', 'mawanella', 'vvvvv', 'dddd'];
  filteredCities: Observable<string[]> | undefined;

  districts: string[] = ['colombo', 'rathna', 'galle', 'badulla'];
  filteredDistricts: Observable<string[]> | undefined;

 hospitals : string[] = ['asiri', 'durdanz', 'nawaloka', 'arya'];
  filteredHospitals: Observable<string[]> | undefined;
  cards = [
    { text1: 'Card 1', text2: 'Text for Card 1', text3: 'More text for Card 1',image: 'assets/img/asiri_hospital.png'  },
    { text1: 'Card 2', text2: 'Text for Card 2', text3: 'More text for Card 2',image:'assets/img/asiri_hospital.png' },
    { text1: 'Card 1', text2: 'Text for Card 1', text3: 'More text for Card 1',image: 'assets/img/asiri_hospital.png' },
    { text1: 'Card 2', text2: 'Text for Card 2', text3: 'More text for Card 2',image: 'assets/img/asiri_hospital.png' },
    { text1: 'Card 1', text2: 'Text for Card 1', text3: 'More text for Card 1',image: 'assets/img/asiri_hospital.png' },
    { text1: 'Card 2', text2: 'Text for Card 2', text3: 'More text for Card 2',image: 'assets/img/asiri_hospital.png' },
    { text1: 'Card 1', text2: 'Text for Card 1', text3: 'More text for Card 1',image: 'assets/img/asiri_hospital.png' },
    { text1: 'Card 2', text2: 'Text for Card 2', text3: 'More text for Card 2',image: 'assets/img/asiri_hospital.png' },
    { text1: 'Card 1', text2: 'Text for Card 1', text3: 'More text for Card 1',image: 'assets/img/asiri_hospital.png' },
    { text1: 'Card 1', text2: 'Text for Card 1', text3: 'More text for Card 1',image: 'assets/img/asiri_hospital.png'  },
    { text1: 'Card 2', text2: 'Text for Card 2', text3: 'More text for Card 2',image:'assets/img/asiri_hospital.png' },
    { text1: 'Card 1', text2: 'Text for Card 1', text3: 'More text for Card 1',image: 'assets/img/asiri_hospital.png' },
    { text1: 'Card 2', text2: 'Text for Card 2', text3: 'More text for Card 2',image: 'assets/img/asiri_hospital.png' },
    { text1: 'Card 1', text2: 'Text for Card 1', text3: 'More text for Card 1',image: 'assets/img/asiri_hospital.png' },
    { text1: 'Card 1', text2: 'Text for Card 1', text3: 'More text for Card 1',image: 'assets/img/asiri_hospital.png' },
    
    { text1: 'Card 1', text2: 'Text for Card 1', text3: 'More text for Card 1',image: 'assets/img/asiri_hospital.png' },
    { text1: 'Card 2', text2: 'Text for Card 2', text3: 'More text for Card 2',image: 'assets/img/asiri_hospital.png' },
    { text1: 'Card 1', text2: 'Text for Card 1', text3: 'More text for Card 1',image: 'assets/img/asiri_hospital.png' },
    { text1: 'Card 2', text2: 'Text for Card 2', text3: 'More text for Card 2',image: 'assets/img/asiri_hospital.png' },
    { text1: 'Card 1', text2: 'Text for Card 1', text3: 'More text for Card 1',image: 'assets/img/asiri_hospital.png' },
    { text1: 'Card 2', text2: 'Text for Card 2', text3: 'More text for Card 2',image: 'assets/img/asiri_hospital.png' },
    { text1: 'Card 2', text2: 'Text for Card 2', text3: 'More text for Card 2',image: 'assets/img/asiri_hospital.png' },
    { text1: 'Card 1', text2: 'Text for Card 1', text3: 'More text for Card 1',image: 'assets/img/asiri_hospital.png' },
    { text1: 'Card 2', text2: 'Text for Card 2', text3: 'More text for Card 2',image: 'assets/img/asiri_hospital.png' },
    { text1: 'Card 1', text2: 'Text for Card 1', text3: 'More text for Card 1',image: 'assets/img/asiri_hospital.png' },
    { text1: 'Card 2', text2: 'Text for Card 2', text3: 'More text for Card 2',image: 'assets/img/asiri_hospital.png' },
    { text1: 'Card 1', text2: 'Text for Card 1', text3: 'More text for Card 1',image: 'assets/img/asiri_hospital.png'  },
    { text1: 'Card 2', text2: 'Text for Card 2', text3: 'More text for Card 2',image:'assets/img/asiri_hospital.png' },
    { text1: 'Card 1', text2: 'Text for Card 1', text3: 'More text for Card 1',image: 'assets/img/asiri_hospital.png' },
    { text1: 'Card 2', text2: 'Text for Card 2', text3: 'More text for Card 2',image: 'assets/img/asiri_hospital.png' },
    { text1: 'Card 1', text2: 'Text for Card 1', text3: 'More text for Card 1',image: 'assets/img/asiri_hospital.png' },
    { text1: 'Card 2', text2: 'Text for Card 2', text3: 'More text for Card 2',image: 'assets/img/asiri_hospital.png' },
    { text1: 'Card 1', text2: 'Text for Card 1', text3: 'More text for Card 1',image: 'assets/img/asiri_hospital.png' },
    { text1: 'Card 2', text2: 'Text for Card 2', text3: 'More text for Card 2',image: 'assets/img/asiri_hospital.png' },
    { text1: 'Card 1', text2: 'Text for Card 1', text3: 'More text for Card 1',image: 'assets/img/asiri_hospital.png' },
    { text1: 'Card 2', text2: 'Text for Card 2', text3: 'More text for Card 2',image: 'assets/img/asiri_hospital.png' },
    { text1: 'Card 2', text2: 'Text for Card 2', text3: 'More text for Card 2',image: 'assets/img/asiri_hospital.png' },
    { text1: 'Card 3', text2: 'Text for Card 3', text3: 'More text for Card 3',image: 'assets/img/asiri_hospital.png' }
  ];
  
  ngOnInit() {
    this.filteredStreets = this.streetControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '', this.streets)),
    );

    this.filteredCities = this.cityControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '', this.cities)),
    );
    this.filteredDistricts = this.districtControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '', this.districts)),
    );
    this.filteredHospitals = this.hospitalControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '', this.hospitals)),
    );

  }

  private _filter(value: string, options: string[]): string[] {
    const filterValue = this._normalizeValue(value);
    return options.filter(option => this._normalizeValue(option).includes(filterValue));
  }

  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }
  
}
