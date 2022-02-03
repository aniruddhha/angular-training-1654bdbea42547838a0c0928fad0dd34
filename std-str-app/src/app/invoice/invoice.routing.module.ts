import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { InvoiceComponent } from './invoice.component'
import { NewInvoiceComponent } from "./new-invoice/new-invoice.component";

const routes: Routes = [
    { path : '', component : InvoiceComponent },
    { path : 'new', component : NewInvoiceComponent }
]

@NgModule({
    imports : [RouterModule.forChild(routes)],
    exports : [RouterModule]
})
export class InvoiceRoutingModule { }