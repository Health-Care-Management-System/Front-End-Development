import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  favorites: any[] = [];
  doctors = [
    { id: 1, name: 'Dr.Amarasekara', imgSrc: 'assets/img/doc23.png' },
    { id: 2, name: 'Dr.Smith', imgSrc: 'assets/img/doc23.png' },
    { id: 3, name: 'Dr.Jones', imgSrc: 'assets/img/doc23.png' },
    { id: 4, name: 'Dr.Chen', imgSrc: 'assets/img/doc23.png' },
    { id: 4, name: 'Dr.Chen', imgSrc: 'assets/img/doc23.png' },
  ];
  hospitals: any[] = [];
  pharmacies: any[] = [];

  constructor(private http: HttpClient) { }

  title = 'edowzori';
  sideBarOpen=true;
  ngOnInit(){
    this.favoriteitems();
    this.favoritehospitals();
    this.favoritepharmacies();
  }

  favoriteitems() {
    this.http.get<any[]>('http://localhost:8080/apifavorite/all').subscribe(
      (data) => {
        this.favorites = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  favoritehospitals() {
    this.http.get<any[]>('http://localhost:8080/apihospitalfavorite/all').subscribe(
      (data) => {
        this.hospitals = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  favoritepharmacies() {
    this.http.get<any[]>('http://localhost:8080/apipharmacyfavorite/all').subscribe(
      (data) => {
        this.pharmacies = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  leftToolBarToggler(){
   this.sideBarOpen=!this.sideBarOpen;
  }

}
