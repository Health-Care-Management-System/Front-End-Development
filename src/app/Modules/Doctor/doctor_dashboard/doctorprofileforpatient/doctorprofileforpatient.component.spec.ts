import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorprofileforpatientComponent } from './doctorprofileforpatient.component';

describe('DoctorprofileforpatientComponent', () => {
  let component: DoctorprofileforpatientComponent;
  let fixture: ComponentFixture<DoctorprofileforpatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorprofileforpatientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorprofileforpatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
