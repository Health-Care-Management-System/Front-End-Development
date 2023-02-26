import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientProfileDisplayedComponent } from './patient-profile-displayed.component';

describe('PatientProfileDisplayedComponent', () => {
  let component: PatientProfileDisplayedComponent;
  let fixture: ComponentFixture<PatientProfileDisplayedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientProfileDisplayedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientProfileDisplayedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
