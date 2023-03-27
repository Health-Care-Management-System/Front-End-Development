import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalLefttoolbarComponent } from './hospital-lefttoolbar.component';

describe('HospitalLefttoolbarComponent', () => {
  let component: HospitalLefttoolbarComponent;
  let fixture: ComponentFixture<HospitalLefttoolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HospitalLefttoolbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalLefttoolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
