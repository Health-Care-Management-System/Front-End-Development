import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchdoctorcontentComponent } from './searchdoctorcontent.component';

describe('SearchdoctorcontentComponent', () => {
  let component: SearchdoctorcontentComponent;
  let fixture: ComponentFixture<SearchdoctorcontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchdoctorcontentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchdoctorcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
