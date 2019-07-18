import { cloneDeep } from 'lodash';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Client } from 'src/app/models/Client';
import { ClientStub } from 'src/app/models/ClientStub';
import { Invoice } from 'src/app/models/Invoice';
import { InvoiceStub } from 'src/app/models/InvoiceStub';
import { StorageKeysEnum } from '../storage/storage-keys-enum';
import { StorageService } from '../storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class ClientsDataService {
  private clients: Client[];
  clientsSubject = new BehaviorSubject<Client[]>([]);
  private storageService: StorageService;

  constructor(storageService: StorageService) {
    this.storageService = storageService;

    const storedClients = this.storageService.read(StorageKeysEnum.CLIENTS, true);
    storedClients.forEach(client => client.invoices = client.invoices.map(invoice => new Invoice(invoice)));
    
    this.clients = storedClients.map(client => new Client(client)) as Client[];

    this.broadcastClients();
  }

  addClientStub() {
    this.clients.push(new ClientStub());

    this.broadcastClients();
  }

  addInvoiceStub(clientId: string) {
    this.clients.find(entry => entry.id === clientId).invoices.push(new InvoiceStub());

    this.broadcastClients();
  }

  private broadcastClients(): void {
    this.clientsSubject.next(this.clients);
  }

  createClient(client: ClientStub) {
    const stubIndex = this.clients.findIndex(entry => entry.id === client.id);

    this.clients[stubIndex] = new Client(client);

    this.updateStoredClients();
    this.broadcastClients();
  }

  createInvoice(clientId: string, invoice: Invoice) {
    const targetClient = this.clients.find(entry => entry.id === clientId);
    const stubIndex = targetClient.invoices.findIndex(entry => entry.id === invoice.id);

    targetClient.invoices[stubIndex] = new Invoice(invoice);

    this.updateStoredClients();
    this.broadcastClients();
  }

  deleteClient(client: Client) {
    const clientIndex = this.clients.findIndex(entry => entry.id === client.id);

    this.clients.splice(clientIndex, 1);

    this.updateStoredClients();
    this.broadcastClients();
  }

  deleteInvoice(clientId: string, invoice: Invoice) {
    const targetClient = this.clients.find(entry => entry.id === clientId);
    const invoiceIndex = targetClient.invoices.findIndex(entry => entry.id === invoice.id);

    targetClient.invoices.splice(invoiceIndex, 1);

    this.updateStoredClients();
    this.broadcastClients();
  }

  private updateStoredClients() {
    const clientsCopy: Client[] = cloneDeep(this.clients);
    
    clientsCopy.filter(client => client instanceof Client).forEach((client) => {
      client.invoices = client.invoices.filter(invoice => invoice instanceof Invoice);
    });

    this.storageService.write(StorageKeysEnum.CLIENTS, true, clientsCopy);
  }

  updateClient(client: ClientStub) {
    const targetClient = this.clients.find(entry => entry.id === client.id);

    Object.assign(targetClient, client);

    this.updateStoredClients();
    this.broadcastClients();
  }

  updateInvoice(clientId: string, invoice: Invoice) {
    const targetClient = this.clients.find(entry => entry.id === clientId);
    const targetInvoice = targetClient.invoices.find(entry => entry.id === invoice.id);

    Object.assign(targetInvoice, invoice);

    this.updateStoredClients();
    this.broadcastClients();
  }
}
