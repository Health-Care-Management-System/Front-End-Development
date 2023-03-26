import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeAnApppoinmentComponent } from './make-an-apppoinment.component';

describe('MakeAnApppoinmentComponent', () => {
  let component: MakeAnApppoinmentComponent;
  let fixture: ComponentFixture<MakeAnApppoinmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MakeAnApppoinmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeAnApppoinmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
