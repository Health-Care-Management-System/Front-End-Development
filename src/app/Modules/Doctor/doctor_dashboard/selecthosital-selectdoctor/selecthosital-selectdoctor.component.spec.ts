import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecthositalSelectdoctorComponent } from './selecthosital-selectdoctor.component';

describe('SelecthositalSelectdoctorComponent', () => {
  let component: SelecthositalSelectdoctorComponent;
  let fixture: ComponentFixture<SelecthositalSelectdoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelecthositalSelectdoctorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelecthositalSelectdoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
