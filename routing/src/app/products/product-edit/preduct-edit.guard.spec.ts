import { TestBed } from '@angular/core/testing';

import { PreductEditGuard } from './preduct-edit.guard';

describe('PreductEditGuard', () => {
  let guard: PreductEditGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PreductEditGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
