import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmbulanceSignupPageComponent } from './ambulance-signup-page.component';

describe('AmbulanceSignupPageComponent', () => {
  let component: AmbulanceSignupPageComponent;
  let fixture: ComponentFixture<AmbulanceSignupPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmbulanceSignupPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmbulanceSignupPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
