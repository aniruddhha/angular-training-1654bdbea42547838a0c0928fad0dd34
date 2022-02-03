import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { InvoiceRestApiService } from '../invoice-rest-api.service';
import { Invoice } from '../invoice.domain';

@Component({
  selector: 'app-new-invoice',
  templateUrl: './new-invoice.component.html',
  styleUrls: ['./new-invoice.component.css']
})
export class NewInvoiceComponent implements OnInit {

  fg : FormGroup
  constructor(
    private fb : FormBuilder,
    private restApi : InvoiceRestApiService,
    private router : Router
  ) { 
    this.fg = fb.group({
      invNum : fb.control(''),
      inDt : fb.control(''),
      amount : fb.control(''),
      status : fb.control(1)
    })
  }

  ngOnInit(): void {
  }

  onCreateInvoice() {
    console.log(this.fg.value)

    const inv : Invoice = this.fg.value
    this.restApi.createNewInvoice(inv).subscribe({
      next : res => this.router.navigate(['/invoice'])
    })
  }
}
