import { TestBed } from '@angular/core/testing';

import { RemoveAllService } from './remove-all.service';

describe('RemoveAllService', () => {
  let service: RemoveAllService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RemoveAllService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
