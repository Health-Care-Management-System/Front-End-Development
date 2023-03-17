import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacysearchComponent } from './pharmacysearch.component';

describe('PharmacysearchComponent', () => {
  let component: PharmacysearchComponent;
  let fixture: ComponentFixture<PharmacysearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PharmacysearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmacysearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
