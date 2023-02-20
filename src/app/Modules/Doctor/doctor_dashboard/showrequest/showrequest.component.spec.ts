import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowrequestComponent } from './showrequest.component';

describe('ShowrequestComponent', () => {
  let component: ShowrequestComponent;
  let fixture: ComponentFixture<ShowrequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowrequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
