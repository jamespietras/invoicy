import uuid from 'uuid';

import { Company } from './Company';

export class InvoiceStub {
  id: string;
  company: Company;
  name: string;
  netValue: number;
  paid: boolean;
  tax: number;

  constructor() {
    this.id = uuid.v4();
    this.paid = false;
  }
}
