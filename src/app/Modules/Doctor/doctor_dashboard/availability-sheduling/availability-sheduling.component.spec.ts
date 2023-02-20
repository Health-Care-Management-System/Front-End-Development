import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailabilityShedulingComponent } from './availability-sheduling.component';

describe('AvailabilityShedulingComponent', () => {
  let component: AvailabilityShedulingComponent;
  let fixture: ComponentFixture<AvailabilityShedulingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvailabilityShedulingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailabilityShedulingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
