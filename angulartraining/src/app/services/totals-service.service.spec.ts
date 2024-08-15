import { TestBed } from '@angular/core/testing';

import { TotalsServiceService } from './totals-service.service';

describe('TotalsServiceService', () => {
  let service: TotalsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TotalsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
