import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacyprofileforpatientComponent } from './pharmacyprofileforpatient.component';

describe('PharmacyprofileforpatientComponent', () => {
  let component: PharmacyprofileforpatientComponent;
  let fixture: ComponentFixture<PharmacyprofileforpatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PharmacyprofileforpatientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmacyprofileforpatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
