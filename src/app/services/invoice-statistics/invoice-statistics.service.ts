import { Injectable } from '@angular/core';

import { Invoice } from 'src/app/models/Invoice';

@Injectable({
  providedIn: 'root'
})
export class InvoiceStatisticsService {
  calculateStatisticsForInvoices(invoices: Invoice[]) {
    const onlySavedInvoices = invoices.filter(invoice => invoice instanceof Invoice);

    return {
      totalGrossValue: this.totalGrossValue(onlySavedInvoices),
      totalNetValue: this.totalNetValue(onlySavedInvoices),
      totalTax: this.totalTax(onlySavedInvoices),
      totalToBePaid: this.totalToBePaid(onlySavedInvoices),
    };
  }

  grossValue(invoice: Invoice): number {
    if (!invoice.netValue || !invoice.tax) {
      return 0;
    }

    const netValue = parseFloat(invoice.netValue.toString());
    const tax = parseFloat(invoice.tax.toString());
    const grossValue = netValue * (1 + tax);

    return this.round(grossValue);
  }

  private round(value) {
    return Number((Math.round(value * 100) / 100).toFixed(2))
  }

  taxValue(invoice: Invoice): number {
    if (!invoice.netValue || !invoice.tax) {
      return 0;
    }

    const netValue = parseFloat(invoice.netValue.toString());
    const tax = parseFloat(invoice.tax.toString());
    const taxValue = netValue * tax;

    return this.round(taxValue);
  }

  totalGrossValue(invoices: Invoice[]) {
    return this.round(invoices.reduce((accumulator, invoice) => {
      return accumulator + this.grossValue(invoice);
    }, 0));
  }

  totalNetValue(invoices: Invoice[]) {
    return this.round(invoices.reduce((accumulator, invoice) => {
      return accumulator + parseFloat(invoice.netValue.toString());
    }, 0));
  }

  totalTax(invoices: Invoice[]) {
    return this.round(invoices.reduce((accumulator, invoice) => {
      return accumulator + this.taxValue(invoice);
    }, 0));
  }

  totalToBePaid(invoices: Invoice[]) {
    return this.round(invoices.filter(invoice => !invoice.paid).reduce((accumulator, invoice) => {
      return accumulator + this.grossValue(invoice);
    }, 0));
  }
}
