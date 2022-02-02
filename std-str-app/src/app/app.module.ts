import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InsuranceModule } from './insurance/insurance.module';
import { UserModule } from './user/user.module';
import { VehicleModule } from './vehicle/vehicle.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    // feature module
    // whenever AppModule loads, all below modules will also load
    UserModule,
    VehicleModule,
    InsuranceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
