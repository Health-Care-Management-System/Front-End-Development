import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyappoinmentsComponent } from './myappoinments.component';

describe('MyappoinmentsComponent', () => {
  let component: MyappoinmentsComponent;
  let fixture: ComponentFixture<MyappoinmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyappoinmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyappoinmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
