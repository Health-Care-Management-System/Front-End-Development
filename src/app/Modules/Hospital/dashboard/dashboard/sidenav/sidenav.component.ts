import { Component, OnInit, Output , EventEmitter } from '@angular/core';
import { navbarData } from './nav-data';
import { ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Hospital } from '../../../hospital';

interface SideNavToggle {

  collapsed: boolean;
}
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  
  avatar:string | undefined;

  hospitalDetails: Hospital[] = [];


  constructor(private observer: BreakpointObserver){
    
  }

  ngOnInit(): void {
  }

  collapsed = true;
  navData = navbarData;


  hospitalId:number | undefined;


  toggleCollapse(): void{
    this.collapsed = !this.collapsed;
  }

  ngAfterViewInit(){
    this.observer.observe(['(max-width:800px)']).subscribe((res) => {
      if(res.matches){
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else{
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });
}

editHospitalProfile(){
  console.log();
}
}

