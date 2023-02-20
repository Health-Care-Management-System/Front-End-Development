import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MininavbarComponent } from './mininavbar.component';

describe('MininavbarComponent', () => {
  let component: MininavbarComponent;
  let fixture: ComponentFixture<MininavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MininavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MininavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
