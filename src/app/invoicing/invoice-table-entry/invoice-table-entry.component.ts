import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Company } from 'src/app/models/Company';
import { Invoice } from 'src/app/models/Invoice';
import { InvoiceStatisticsService } from 'src/app/services/invoice-statistics/invoice-statistics.service';
import { InvoiceStub } from 'src/app/models/InvoiceStub';

@Component({
  selector: '[app-invoice-table-entry]',
  templateUrl: './invoice-table-entry.component.html',
  styleUrls: ['./invoice-table-entry.component.scss']
})
export class InvoiceTableEntryComponent implements OnInit {
  @Input() companies: Company[];
  editionModeEnabled = false;
  @Input() index: number;
  @Input() invoice: Invoice | InvoiceStub;
  invoiceCompanyId: string;
  private invoiceStatisticsService: InvoiceStatisticsService;
  isStub = false;
  @Output() onDelete = new EventEmitter<Invoice | InvoiceStub>();
  @Output() onSave = new EventEmitter<Invoice | InvoiceStub>();

  constructor(invoiceStatisticsService: InvoiceStatisticsService) {
    this.invoiceStatisticsService = invoiceStatisticsService;
  }

  ngOnInit() {
    if (this.invoice instanceof InvoiceStub) {
      this.editionModeEnabled = true;
      this.isStub = true;
    }

    if (this.invoice.company) {
      this.invoiceCompanyId = this.invoice.company.id;
    }
  }

  get grossValue() {
    return this.invoiceStatisticsService.grossValue(this.invoice);
  }

  get taxValue() {
    return this.invoiceStatisticsService.taxValue(this.invoice);
  }

  deleteInvoice() {
    this.onDelete.emit(this.invoice);
  }

  handlePaidChange() {
    this.onSave.emit(this.invoice);
  }

  saveChanges() {
    this.invoice.company = this.companies.find(entry => entry.id === this.invoiceCompanyId);
    this.onSave.emit(this.invoice);

    this.toggleEditionMode();
  }

  toggleEditionMode() {
    this.editionModeEnabled = !this.editionModeEnabled;
  }
}
