import { TestBed } from '@angular/core/testing';

import { CollectorGuardService } from './collector-guard.service';

describe('CollectorGuardService', () => {
  let service: CollectorGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CollectorGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
