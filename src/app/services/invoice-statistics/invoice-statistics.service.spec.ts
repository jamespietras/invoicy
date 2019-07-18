import { TestBed } from '@angular/core/testing';

import { Invoice } from 'src/app/models/Invoice';
import { InvoiceStatisticsService } from './invoice-statistics.service';

let mockInvoices: Invoice[] = [
  new Invoice({
    netValue: 10,
    tax: 0.23,
    paid: true,
    name: 'Test',
    company: {
      id: '1',
      name: 'Test',
    },
    id: '1',
  }),
  new Invoice({
    netValue: 94.87,
    tax: 0.08,
    paid: false,
    name: 'Test',
    company: {
      id: '1',
      name: 'Test',
    },
    id: '1',
  }),
];

describe('InvoiceStatisticsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InvoiceStatisticsService = TestBed.get(InvoiceStatisticsService);
    expect(service).toBeTruthy();
  });

  it('should calculate statistics for array of invoices', () => {
    const service: InvoiceStatisticsService = TestBed.get(InvoiceStatisticsService);

    const statistics = service.calculateStatisticsForInvoices(mockInvoices);

    expect(statistics.totalGrossValue).toBe(114.76);
    expect(statistics.totalNetValue).toBe(104.87);
    expect(statistics.totalTax).toBe(9.89);
    expect(statistics.totalToBePaid).toBe(102.46);
  });

  it('should calculate gross value', () => {
    const service: InvoiceStatisticsService = TestBed.get(InvoiceStatisticsService);

    const grossValue = service.grossValue(mockInvoices[0]);

    expect(grossValue).toBe(12.3);
  });

  it('should calculate tax value', () => {
    const service: InvoiceStatisticsService = TestBed.get(InvoiceStatisticsService);

    const taxValue = service.taxValue(mockInvoices[0]);

    expect(taxValue).toBe(2.3);
  });

  it('should calculate total gross value', () => {
    const service: InvoiceStatisticsService = TestBed.get(InvoiceStatisticsService);

    const totalGrossValue = service.totalGrossValue(mockInvoices);

    expect(totalGrossValue).toBe(114.76);
  });

  it('should calculate total net value', () => {
    const service: InvoiceStatisticsService = TestBed.get(InvoiceStatisticsService);

    const totalNetValue = service.totalNetValue(mockInvoices);

    expect(totalNetValue).toBe(104.87);
  });

  it('should calculate total tax value', () => {
    const service: InvoiceStatisticsService = TestBed.get(InvoiceStatisticsService);

    const totalTaxValue = service.totalTax(mockInvoices);

    expect(totalTaxValue).toBe(9.89);
  });

  it('should calculate total to be paid value', () => {
    const service: InvoiceStatisticsService = TestBed.get(InvoiceStatisticsService);

    const totalToBePaid = service.totalToBePaid(mockInvoices);

    expect(totalToBePaid).toBe(102.46);
  });
});
