import { TestBed } from '@angular/core/testing';

import { InvoiceRestApiService } from './invoice-rest-api.service';

describe('InvoiceRestApiService', () => {
  let service: InvoiceRestApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InvoiceRestApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
