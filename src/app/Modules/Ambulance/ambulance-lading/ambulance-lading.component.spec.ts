import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmbulanceLadingComponent } from './ambulance-lading.component';

describe('AmbulanceLadingComponent', () => {
  let component: AmbulanceLadingComponent;
  let fixture: ComponentFixture<AmbulanceLadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmbulanceLadingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmbulanceLadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
