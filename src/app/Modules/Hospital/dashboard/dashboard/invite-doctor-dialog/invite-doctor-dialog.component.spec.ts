import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteDoctorDialogComponent } from './invite-doctor-dialog.component';

describe('InviteDoctorDialogComponent', () => {
  let component: InviteDoctorDialogComponent;
  let fixture: ComponentFixture<InviteDoctorDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InviteDoctorDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InviteDoctorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
