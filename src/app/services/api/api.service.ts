import { Injectable } from '@angular/core';

import { CompanyNormalizer, ICompany } from './normalizers/company-normalizer';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  fetchCompanies(): ICompany[] {
    const companies = [
      {id: '1', name: 'Oracle'},
    ];

    return CompanyNormalizer.normalizeArray(companies);
  }
}
