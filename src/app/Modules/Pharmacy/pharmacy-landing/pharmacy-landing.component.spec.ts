import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacyLandingComponent } from './pharmacy-landing.component';

describe('PharmacyLandingComponent', () => {
  let component: PharmacyLandingComponent;
  let fixture: ComponentFixture<PharmacyLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PharmacyLandingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmacyLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
