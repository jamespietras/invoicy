import uuid from 'uuid';

import { Company } from './Company';

export class InvoiceStub {
  id: string;
  company: Company;
  name: string;
  netValue: number;
  tax: number;

  constructor() {
    this.id = new uuid.v4();
  }
}
