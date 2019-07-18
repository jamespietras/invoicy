import { Invoice } from './Invoice';

export class Client {
  id: string;
  invoices: Invoice[];
  name: string;

  constructor(clientData: {
    id: string;
    invoices: Invoice[];
    name: string;
  }) {
    Object.assign(this, clientData);
  }
}
