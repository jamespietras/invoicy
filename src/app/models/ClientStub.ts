import uuid from 'uuid';

import { Invoice } from './Invoice';
import { InvoiceStub } from './InvoiceStub';

export class ClientStub {
  id: string;
  invoices: (Invoice| InvoiceStub)[];
  name: string;

  constructor() {
    this.id = uuid.v4();
    this.invoices = [];
    this.name = '';
  }
}
