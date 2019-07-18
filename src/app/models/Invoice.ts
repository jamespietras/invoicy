import { Company } from './Company';

export class Invoice {
  id: string;
  company: Company;
  name: string;
  netValue: number;
  paid: boolean;
  tax: number;

  constructor(invoiceData: {
    id: string;
    company: Company;
    name: string;
    netValue: number;
    paid: boolean;
    tax: number;
  }) {
    Object.assign(this, invoiceData);
  }
}
