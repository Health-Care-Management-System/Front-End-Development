import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAmbulenceComponent } from './admin-ambulence.component';

describe('AdminAmbulenceComponent', () => {
  let component: AdminAmbulenceComponent;
  let fixture: ComponentFixture<AdminAmbulenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAmbulenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAmbulenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
