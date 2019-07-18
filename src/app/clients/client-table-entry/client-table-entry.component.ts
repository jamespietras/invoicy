import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Client } from 'src/app/models/Client';
import { ClientStub } from 'src/app/models/ClientStub';
import { InvoiceStatisticsService } from 'src/app/services/invoice-statistics/invoice-statistics.service';

@Component({
  selector: '[app-client-table-entry]',
  templateUrl: './client-table-entry.component.html',
  styleUrls: ['./client-table-entry.component.scss']
})
export class ClientTableEntryComponent implements OnInit {
  @Input() client: Client | ClientStub;
  editionModeEnabled = false;
  @Input() index: number;
  invoiceCompanyId: string;
  private invoiceStatisticsService: InvoiceStatisticsService;
  isStub = false;
  @Output() onDelete = new EventEmitter<Client | ClientStub>();
  @Output() onSave = new EventEmitter<Client | ClientStub>();

  constructor(invoiceStatisticsService: InvoiceStatisticsService) {
    this.invoiceStatisticsService = invoiceStatisticsService;
  }

  get invoicesInDatabase() {
    return this.client.invoices.length;
  }

  get totalUnpaid() {
    return this.invoiceStatisticsService.totalToBePaid(this.client.invoices);
  }

  ngOnInit() {
    if (this.client instanceof ClientStub) {
      this.editionModeEnabled = true;
      this.isStub = true;
    }
  }

  deleteClient() {
    this.onDelete.emit(this.client);
  }

  saveChanges() {
    this.onSave.emit(this.client);

    this.toggleEditionMode();
  }

  toggleEditionMode() {
    this.editionModeEnabled = !this.editionModeEnabled;
  }
}
