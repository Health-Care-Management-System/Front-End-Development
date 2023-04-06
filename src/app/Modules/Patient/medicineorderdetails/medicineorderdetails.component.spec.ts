import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicineorderdetailsComponent } from './medicineorderdetails.component';

describe('MedicineorderdetailsComponent', () => {
  let component: MedicineorderdetailsComponent;
  let fixture: ComponentFixture<MedicineorderdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicineorderdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicineorderdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
