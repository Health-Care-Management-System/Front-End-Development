import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowappoinmentrequestsComponent } from './showappoinmentrequests.component';

describe('ShowappoinmentrequestsComponent', () => {
  let component: ShowappoinmentrequestsComponent;
  let fixture: ComponentFixture<ShowappoinmentrequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowappoinmentrequestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowappoinmentrequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
