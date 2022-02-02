import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InsuranceComponent } from './insurance.component';



@NgModule({
  declarations: [
    InsuranceComponent
  ],
  imports: [
    CommonModule
  ],
  exports : [
    InsuranceComponent
  ]
})
export class InsuranceModule { }
