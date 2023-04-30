import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalprofileforpatientComponent } from './hospitalprofileforpatient.component';

describe('HospitalprofileforpatientComponent', () => {
  let component: HospitalprofileforpatientComponent;
  let fixture: ComponentFixture<HospitalprofileforpatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HospitalprofileforpatientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalprofileforpatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
