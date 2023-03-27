import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacySignupNextComponent } from './pharmacy-signup-next.component';

describe('PharmacySignupNextComponent', () => {
  let component: PharmacySignupNextComponent;
  let fixture: ComponentFixture<PharmacySignupNextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PharmacySignupNextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmacySignupNextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
