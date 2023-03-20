import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalSignupNextComponent } from './hospital-signup-next.component';

describe('HospitalSignupNextComponent', () => {
  let component: HospitalSignupNextComponent;
  let fixture: ComponentFixture<HospitalSignupNextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HospitalSignupNextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalSignupNextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
