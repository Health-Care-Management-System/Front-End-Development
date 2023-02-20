import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftToolBarComponent } from './left-tool-bar.component';

describe('LeftToolBarComponent', () => {
  let component: LeftToolBarComponent;
  let fixture: ComponentFixture<LeftToolBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftToolBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftToolBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
