import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeAnAppoinmentWithDoctorComponent } from './make-an-appoinment-with-doctor.component';

describe('MakeAnAppoinmentWithDoctorComponent', () => {
  let component: MakeAnAppoinmentWithDoctorComponent;
  let fixture: ComponentFixture<MakeAnAppoinmentWithDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MakeAnAppoinmentWithDoctorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeAnAppoinmentWithDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
