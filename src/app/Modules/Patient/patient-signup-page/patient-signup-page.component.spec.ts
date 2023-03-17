import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientSignupPageComponent } from './patient-signup-page.component';

describe('PatientSignupPageComponent', () => {
  let component: PatientSignupPageComponent;
  let fixture: ComponentFixture<PatientSignupPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientSignupPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientSignupPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
