import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Company } from 'src/app/models/Company';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  fetchCompanies(): Observable<Company[]> {
    return this.httpClient.get<Company[]>('http://www.mocky.io/v2/5d30877d320000ad57204590');
  }
}
