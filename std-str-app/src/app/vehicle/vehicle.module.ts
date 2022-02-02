import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleComponent } from './vehicle.component';


// --flat say --> do not create new folder and create in same folder
// ng g name of module/name of component --flat
// ng g m name of module
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
