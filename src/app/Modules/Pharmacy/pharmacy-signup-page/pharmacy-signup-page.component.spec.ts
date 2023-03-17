import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacySignupPageComponent } from './pharmacy-signup-page.component';

describe('PharmacySignupPageComponent', () => {
  let component: PharmacySignupPageComponent;
  let fixture: ComponentFixture<PharmacySignupPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PharmacySignupPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmacySignupPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
