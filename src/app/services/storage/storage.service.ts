import uuid from 'uuid';
import { Injectable } from '@angular/core';

import { Client } from 'src/app/models/Client';
import { Company } from 'src/app/models/Company';
import { Invoice } from 'src/app/models/Invoice';
import { StorageKeysEnum } from './storage-keys-enum';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor() {
    let storedClients = this.read(StorageKeysEnum.CLIENTS, true);

    if (storedClients === null) {
      storedClients = [
        new Client({
          id: uuid.v4(),
          invoices: [
            new Invoice({
              id: uuid.v4(),
              company: new Company(uuid.v4(), 'Example company'),
              name: 'Example invoice',
              netValue: 10,
              tax: 0.23,
            }),
          ],
          name: 'Example client',
        }),
        new Client({
          id: uuid.v4(),
          invoices: [
            new Invoice({
              id: uuid.v4(),
              company: new Company(uuid.v4(), 'Example company 2'),
              name: 'Example invoice 2',
              netValue: 10,
              tax: 0.23,
            }),
          ],
          name: 'Example client 2',
        }),
        new Client({
          id: uuid.v4(),
          invoices: [
            new Invoice({
              id: uuid.v4(),
              company: new Company(uuid.v4(), 'Example company 3'),
              name: 'Example invoice 3',
              netValue: 10,
              tax: 0.23,
            }),
          ],
          name: 'Example client 3',
        }),
      ];

      this.write(StorageKeysEnum.CLIENTS, true, storedClients);
    }
  }

  private pickStorageProvider(persisted: boolean): Storage {
    if (persisted) {
      return localStorage;
    } else {
      return sessionStorage;
    }
  }

  read(key: StorageKeysEnum, persisted: boolean): any {
    const value: any = this.pickStorageProvider(persisted).getItem(key);

    if (value === null) {
      return value;
    } else {
      return JSON.parse(value);
    }
  }

  write(key: StorageKeysEnum, persisted: boolean, value: any): void {
    this.pickStorageProvider(persisted).setItem(key, JSON.stringify(value));
  }
}
