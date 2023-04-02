import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardDoctorsComponent } from './onboard-doctors.component';

describe('OnboardDoctorsComponent', () => {
  let component: OnboardDoctorsComponent;
  let fixture: ComponentFixture<OnboardDoctorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnboardDoctorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnboardDoctorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
