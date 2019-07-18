import { Invoice } from './Invoice';
import { InvoiceStub } from './InvoiceStub';

export class Client {
  id: string;
  invoices: (Invoice| InvoiceStub)[];
  name: string;

  constructor(clientData: {
    id: string;
    invoices: (Invoice| InvoiceStub)[];
    name: string;
  }) {
    Object.assign(this, clientData);
  }
}
