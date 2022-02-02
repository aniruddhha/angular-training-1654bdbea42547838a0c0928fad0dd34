import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InsuranceComponent } from './insurance.component';
import { InsuranceRoutingModule } from './insurance.routing.module';



@NgModule({
  declarations: [
    InsuranceComponent
  ],
  imports: [
    CommonModule,
    InsuranceRoutingModule
  ],
  exports : [
    InsuranceComponent
  ]
})
export class InsuranceModule { }
