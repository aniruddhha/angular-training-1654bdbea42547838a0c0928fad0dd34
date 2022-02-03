import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstPipe } from './first.pipe';
import { BasicDirective } from './basic.directive';

@NgModule({
  declarations: [
    AppComponent,
    FirstPipe,
    BasicDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
