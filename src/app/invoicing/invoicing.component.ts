import { Component } from '@angular/core';

import { ApiService } from '../services/api/api.service';
import { Client } from '../models/Client';
import { ClientsDataService } from '../services/client-data/clients-data.service';
import { Company } from '../models/Company';
import { Invoice } from '../models/Invoice';
import { InvoiceStub } from '../models/InvoiceStub';

@Component({
  selector: 'app-invoicing',
  templateUrl: './invoicing.component.html',
  styleUrls: ['./invoicing.component.scss']
})
export class InvoicingComponent {
  activeClient: Client;
  private apiService: ApiService;
  clients: Client[] = [];
  companies: Company[] = [];
  private clientsDataService: ClientsDataService;

  constructor(apiService: ApiService, clientsDataService: ClientsDataService) {
    this.apiService = apiService;
    this.clientsDataService = clientsDataService;

    this.clientsDataService.clientsSubject.subscribe(clients => {
      this.clients = clients;

      if (!this.activeClient) {
        this.activeClient = this.clients[0];
      }
    });

    this.apiService.fetchCompanies().subscribe((companies: Company[]) => {
      this.companies = companies;
    });
  }

  addEmptyInvoice(): void {
    this.clientsDataService.addInvoiceStub(this.activeClient.id);
  }
 
  deleteInvoice(invoice: Invoice | InvoiceStub) {
    this.clientsDataService.deleteInvoice(this.activeClient.id, invoice);
  }

  saveInvoice(invoice: Invoice | InvoiceStub) {
    if (invoice instanceof Invoice) {
      this.clientsDataService.updateInvoice(this.activeClient.id, invoice);
    } else {
      this.clientsDataService.createInvoice(this.activeClient.id, invoice);
    }
  }
}
