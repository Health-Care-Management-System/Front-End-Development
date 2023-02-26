import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacyLeftToolbarComponent } from './pharmacy-left-toolbar.component';

describe('PharmacyLeftToolbarComponent', () => {
  let component: PharmacyLeftToolbarComponent;
  let fixture: ComponentFixture<PharmacyLeftToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PharmacyLeftToolbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmacyLeftToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
