import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeastComponent } from './teast.component';

describe('TeastComponent', () => {
  let component: TeastComponent;
  let fixture: ComponentFixture<TeastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
