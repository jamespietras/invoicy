import { TestBed } from '@angular/core/testing';

import { ClientsDataService } from './clients-data.service';

describe('ClientsDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClientsDataService = TestBed.get(ClientsDataService);
    expect(service).toBeTruthy();
  });
});
