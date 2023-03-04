import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacySignupNextPageComponent } from './pharmacy-signup-next-page.component';

describe('PharmacySignupNextPageComponent', () => {
  let component: PharmacySignupNextPageComponent;
  let fixture: ComponentFixture<PharmacySignupNextPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PharmacySignupNextPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmacySignupNextPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
