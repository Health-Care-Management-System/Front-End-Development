import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateappoinmentsComponent } from './updateappoinments.component';

describe('UpdateappoinmentsComponent', () => {
  let component: UpdateappoinmentsComponent;
  let fixture: ComponentFixture<UpdateappoinmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateappoinmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateappoinmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
