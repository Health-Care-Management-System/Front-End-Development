import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalSignupNextPageComponent } from './hospital-signup-next-page.component';

describe('HospitalSignupNextPageComponent', () => {
  let component: HospitalSignupNextPageComponent;
  let fixture: ComponentFixture<HospitalSignupNextPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HospitalSignupNextPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalSignupNextPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
