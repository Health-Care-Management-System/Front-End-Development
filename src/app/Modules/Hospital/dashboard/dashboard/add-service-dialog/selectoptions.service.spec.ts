import { TestBed } from '@angular/core/testing';

import { SelectoptionsService } from './selectoptions.service';

describe('SelectoptionsService', () => {
  let service: SelectoptionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectoptionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
