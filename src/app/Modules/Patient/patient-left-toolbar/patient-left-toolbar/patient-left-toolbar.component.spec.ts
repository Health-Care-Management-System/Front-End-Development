import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientLeftToolbarComponent } from './patient-left-toolbar.component';

describe('PatientLeftToolbarComponent', () => {
  let component: PatientLeftToolbarComponent;
  let fixture: ComponentFixture<PatientLeftToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientLeftToolbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientLeftToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
