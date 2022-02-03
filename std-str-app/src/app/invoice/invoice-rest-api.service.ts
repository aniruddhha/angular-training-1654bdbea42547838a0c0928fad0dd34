import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppRes } from '../http/app.res';
import { Invoice } from './invoice.domain';

@Injectable()
export class InvoiceRestApiService {

  constructor(
    private httpClient : HttpClient
  ) { }

  createNewInvoice(invoice : Invoice): Observable<AppRes<number>> {
    return this.httpClient.post<AppRes<number>>('http://localhost:8080/invoice', invoice);
  }

  findAllInvoices(): Observable<AppRes<Array<Invoice>>> {
    return this.httpClient.get<AppRes<Array<Invoice>>>('http://localhost:8080/invoice')
  }
}
