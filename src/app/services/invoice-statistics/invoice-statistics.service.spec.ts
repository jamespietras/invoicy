import { TestBed } from '@angular/core/testing';

import { InvoiceStatisticsService } from './invoice-statistics.service';

describe('InvoiceStatisticsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InvoiceStatisticsService = TestBed.get(InvoiceStatisticsService);
    expect(service).toBeTruthy();
  });
});
