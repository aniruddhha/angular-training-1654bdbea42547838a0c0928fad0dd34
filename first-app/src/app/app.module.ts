import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DataComponent } from './data.component';

@NgModule({
  declarations: [
    AppComponent, // components,
    DataComponent
  ],
  imports: [
    BrowserModule // submodules
  ],
  providers: [], // we will talk about it later on
  bootstrap: [AppComponent] // is available only in main top level module
})
export class AppModule { }
