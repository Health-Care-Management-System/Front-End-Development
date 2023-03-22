import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmbulanceSignupNextComponent } from './ambulance-signup-next.component';

describe('AmbulanceSignupNextComponent', () => {
  let component: AmbulanceSignupNextComponent;
  let fixture: ComponentFixture<AmbulanceSignupNextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmbulanceSignupNextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmbulanceSignupNextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
