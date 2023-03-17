import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalSignupPageComponent } from './hospital-signup-page.component';

describe('HospitalSignupPageComponent', () => {
  let component: HospitalSignupPageComponent;
  let fixture: ComponentFixture<HospitalSignupPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HospitalSignupPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalSignupPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
