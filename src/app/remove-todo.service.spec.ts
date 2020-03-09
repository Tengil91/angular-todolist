import { TestBed } from '@angular/core/testing';

import { RemoveTodoService } from './remove-todo.service';

describe('RemoveTodoService', () => {
  let service: RemoveTodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RemoveTodoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
