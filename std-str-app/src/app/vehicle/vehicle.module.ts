import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleComponent } from './vehicle.component';



@NgModule({
  declarations: [
    VehicleComponent
  ],
  imports: [
    CommonModule
  ],
  exports : [
    VehicleComponent
  ]
})
export class VehicleModule { }
