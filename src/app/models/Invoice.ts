import { Company } from './Company';

export class Invoice {
  id: string;
  company: Company;
  name: string;
  netValue: number;
  tax: number;

  constructor(invoiceData: {
    id: string;
    company: Company;
    name: string;
    netValue: number;
    tax: number;
  }) {
    Object.assign(this, invoiceData);
  }
}
