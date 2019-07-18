import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { InvoicingComponent } from './invoicing.component';
import { InvoiceTableEntryComponent } from './invoice-table-entry/invoice-table-entry.component';
import { ClientSummaryComponent } from './client-summary/client-summary.component';

@NgModule({
  declarations: [InvoicingComponent, InvoiceTableEntryComponent, ClientSummaryComponent],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [InvoicingComponent]
})
export class InvoicingModule { }
