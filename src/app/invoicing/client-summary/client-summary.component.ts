import { Component, Input } from '@angular/core';

import { Invoice } from 'src/app/models/Invoice';
import { InvoiceStatisticsService } from 'src/app/services/invoice-statistics/invoice-statistics.service';

@Component({
  selector: 'app-client-summary',
  templateUrl: './client-summary.component.html',
  styleUrls: ['./client-summary.component.scss']
})
export class ClientSummaryComponent {
  @Input() invoices: Invoice[];
  private invoiceStatisticsService: InvoiceStatisticsService;

  constructor(invoiceStatisticsService: InvoiceStatisticsService) {
    this.invoiceStatisticsService = invoiceStatisticsService;
  }

  get statistics() {
    return this.invoiceStatisticsService.calculateStatisticsForInvoices(this.invoices);
  }
}
