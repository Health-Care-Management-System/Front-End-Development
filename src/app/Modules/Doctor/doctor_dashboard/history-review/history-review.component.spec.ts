import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryReviewComponent } from './history-review.component';

describe('HistoryReviewComponent', () => {
  let component: HistoryReviewComponent;
  let fixture: ComponentFixture<HistoryReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
