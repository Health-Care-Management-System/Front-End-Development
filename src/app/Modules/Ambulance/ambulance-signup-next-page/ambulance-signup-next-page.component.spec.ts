import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmbulanceSignupNextPageComponent } from './ambulance-signup-next-page.component';

describe('AmbulanceSignupNextPageComponent', () => {
  let component: AmbulanceSignupNextPageComponent;
  let fixture: ComponentFixture<AmbulanceSignupNextPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmbulanceSignupNextPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmbulanceSignupNextPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
