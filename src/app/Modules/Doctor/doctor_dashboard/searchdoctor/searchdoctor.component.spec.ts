import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchdoctorComponent } from './searchdoctor.component';

describe('SearchdoctorComponent', () => {
  let component: SearchdoctorComponent;
  let fixture: ComponentFixture<SearchdoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchdoctorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchdoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
