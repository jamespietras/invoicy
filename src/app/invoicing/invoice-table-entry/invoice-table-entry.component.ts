import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Invoice } from 'src/app/models/Invoice';
import { InvoiceStub } from 'src/app/models/InvoiceStub';

@Component({
  selector: '[app-invoice-table-entry]',
  templateUrl: './invoice-table-entry.component.html',
  styleUrls: ['./invoice-table-entry.component.scss']
})
export class InvoiceTableEntryComponent implements OnInit {
  editionModeEnabled = false;
  @Input() index: number;
  @Input() invoice: Invoice | InvoiceStub;
  isStub = false;
  @Output() onDelete = new EventEmitter<Invoice | InvoiceStub>();
  @Output() onSave = new EventEmitter<Invoice | InvoiceStub>();

  ngOnInit() {
    if (this.invoice instanceof InvoiceStub) {
      this.editionModeEnabled = true;
      this.isStub = true;
    }
  }

  get invoiceGrossValue(): number {
    if (!this.invoice.netValue || !this.invoice.tax) {
      return 0;
    }
    
    return Math.round(parseFloat(this.invoice.netValue.toString()) * (1 + parseFloat(this.invoice.tax.toString())));
  }

  deleteInvoice() {
    this.onDelete.emit(this.invoice);
  }

  saveChanges() {
    this.onSave.emit(this.invoice);

    this.toggleEditionMode();
  }

  toggleEditionMode() {
    this.editionModeEnabled = !this.editionModeEnabled;
  }
}
