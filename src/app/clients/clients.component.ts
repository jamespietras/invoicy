import { Component } from '@angular/core';

import { Client } from '../models/Client';
import { ClientsDataService } from '../services/client-data/clients-data.service';
import { ClientStub } from '../models/ClientStub';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent {
  clients: Client[];
  private clientsDataService: ClientsDataService;

  constructor(clientsDataService: ClientsDataService) {
    this.clientsDataService = clientsDataService;

    this.clientsDataService.clientsSubject.subscribe(clients => {
      this.clients = clients;
    });
  }

  addEmptyClient(): void {
    this.clientsDataService.addClientStub();
  }
 
  deleteClient(client: Client | ClientStub) {
    this.clientsDataService.deleteClient(client);
  }

  saveClient(client: Client | ClientStub) {
    if (client instanceof Client) {
      this.clientsDataService.updateClient(client);
    } else {
      this.clientsDataService.createClient(client);
    }
  }
}
