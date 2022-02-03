import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoiceComponent } from './invoice.component';

import { HttpClientModule } from '@angular/common/http'
import { InvoiceRoutingModule } from './invoice.routing.module';
import { InvoiceRestApiService } from './invoice-rest-api.service';
import { NewInvoiceComponent } from './new-invoice/new-invoice.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    InvoiceComponent,
    NewInvoiceComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    InvoiceRoutingModule,

    FormsModule,
    ReactiveFormsModule
  ],
  providers: [InvoiceRestApiService]
})
export class InvoiceModule { }
