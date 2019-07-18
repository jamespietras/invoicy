import { cloneDeep } from 'lodash';
import { Component } from '@angular/core';

import { Client } from '../models/Client';
import { Company } from '../models/Company';
import { Invoice } from '../models/Invoice';
import { InvoiceStub } from '../models/InvoiceStub';
import { StorageKeysEnum } from '../services/storage/storage-keys-enum';
import { StorageService } from '../services/storage/storage.service';

@Component({
  selector: 'app-invoicing',
  templateUrl: './invoicing.component.html',
  styleUrls: ['./invoicing.component.scss']
})
export class InvoicingComponent {
  activeClient: Client;
  clients: Client[] = [];
  private storageService: StorageService;

  constructor(storageService: StorageService) {
    this.storageService = storageService;

    const storedClients = this.storageService.read(StorageKeysEnum.CLIENTS, true);
    storedClients.forEach(client => client.invoices = client.invoices.map(invoice => new Invoice(invoice)));
    
    this.clients = storedClients.map(client => new Client(client)) as Client[];
    this.activeClient = this.clients[0];

    // for (let i = 1 ; i <= 5 ; i++) {
    //   const exampleInvoice = new Invoice({
    //     company: new Company('1', 'Oracle'),
    //     id: i.toString(),
    //     name: 'Database setup service',
    //     netValue: 10,
    //     tax: 0.23,
    //   });

    //   this.invoices.push(exampleInvoice);
    // }
  }

  addEmptyInvoice(): void {
    this.activeClient.invoices.push(new InvoiceStub());

    this.updateStoredClients();
  }

  changeClient(): void {
    // this.activeClient.invoices = this.activeClient.invoices.filter(entry => entry instanceof Invoice);
  }

  deleteInvoice(invoice: Invoice | InvoiceStub) {
    const invoiceIndex = this.activeClient.invoices.findIndex(entry => entry.id === invoice.id);
    this.activeClient.invoices.splice(invoiceIndex, 1);

    this.updateStoredClients();
  }

  saveInvoice(invoice: Invoice | InvoiceStub) {
    if (invoice instanceof Invoice) {
      const targetInvoice = this.activeClient.invoices.find(entry => entry.id === invoice.id);

      Object.assign(targetInvoice, invoice);
    } else {
      const stubIndex = this.activeClient.invoices.findIndex(entry => entry.id === invoice.id);

      this.activeClient.invoices[stubIndex] = new Invoice(invoice);
    }

    this.updateStoredClients();
  }

  private updateStoredClients() {
    const clientsCopy: Client[] = cloneDeep(this.clients);
    
    clientsCopy.forEach((client) => {
      client.invoices = client.invoices.filter(invoice => invoice instanceof Invoice);
    });

    this.storageService.write(StorageKeysEnum.CLIENTS, true, clientsCopy);
  }
}
