import { Component, OnInit } from '@angular/core';
import { Observer } from 'rxjs';
import { AppRes } from '../http/app.res';
import { InvoiceRestApiService } from './invoice-rest-api.service';
import { Invoice } from './invoice.domain';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  invoices = new Array<Invoice>()

  constructor(
    private restApi : InvoiceRestApiService
  ) { }

  ngOnInit(): void {

    // const inv: Invoice = {
    //   id : 0,
    //   invNum: '654768977',
    //   inDt: '2021-01-01',
    //   amount: 89833,
    //   status: 3
    // }

    // this.restApi.createNewInvoice(inv).subscribe({
    //   next : res => console.log(res)
    // })

    this.restApi.findAllInvoices().subscribe({
      next : (res) => this.invoices = res.bdy 
    })
    
  }

}
