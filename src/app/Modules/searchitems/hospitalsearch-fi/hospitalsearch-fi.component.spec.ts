import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalsearchFiComponent } from './hospitalsearch-fi.component';

describe('HospitalsearchFiComponent', () => {
  let component: HospitalsearchFiComponent;
  let fixture: ComponentFixture<HospitalsearchFiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HospitalsearchFiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalsearchFiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
