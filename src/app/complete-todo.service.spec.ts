import { TestBed } from '@angular/core/testing';

import { CompleteTodoService } from './complete-todo.service';

describe('CompleteTodoService', () => {
  let service: CompleteTodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompleteTodoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
