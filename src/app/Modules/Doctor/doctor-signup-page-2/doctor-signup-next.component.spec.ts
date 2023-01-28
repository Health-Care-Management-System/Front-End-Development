import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorSignupNextComponent } from './doctor-signup-next.component';

describe('DoctorSignupNextComponent', () => {
  let component: DoctorSignupNextComponent;
  let fixture: ComponentFixture<DoctorSignupNextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorSignupNextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorSignupNextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
