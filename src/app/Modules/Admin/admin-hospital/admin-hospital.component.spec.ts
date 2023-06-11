import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHospitalComponent } from './admin-hospital.component';

describe('AdminHospitalComponent', () => {
  let component: AdminHospitalComponent;
  let fixture: ComponentFixture<AdminHospitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminHospitalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminHospitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
