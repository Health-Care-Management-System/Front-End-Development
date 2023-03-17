import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorsearchFiComponent } from './doctorsearch-fi.component';

describe('DoctorsearchFiComponent', () => {
  let component: DoctorsearchFiComponent;
  let fixture: ComponentFixture<DoctorsearchFiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorsearchFiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorsearchFiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
