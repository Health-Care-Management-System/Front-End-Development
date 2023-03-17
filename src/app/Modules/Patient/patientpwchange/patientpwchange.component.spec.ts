import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientpwchangeComponent } from './patientpwchange.component';

describe('PatientpwchangeComponent', () => {
  let component: PatientpwchangeComponent;
  let fixture: ComponentFixture<PatientpwchangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientpwchangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientpwchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
