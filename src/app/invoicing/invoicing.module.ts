import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { InvoicingComponent } from './invoicing.component';
import { InvoiceTableEntryComponent } from './invoice-table-entry/invoice-table-entry.component';

@NgModule({
  declarations: [InvoicingComponent, InvoiceTableEntryComponent],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [InvoicingComponent]
})
export class InvoicingModule { }
