import { TestBed } from '@angular/core/testing';

import { CompleteAllService } from './complete-all.service';

describe('CompleteAllService', () => {
  let service: CompleteAllService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompleteAllService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
