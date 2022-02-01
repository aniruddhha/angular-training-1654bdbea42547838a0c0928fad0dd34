import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DataComponent } from './data.component';
import { LittleComponent } from './little/little.component';
import { InteractionComponent } from './interaction/interaction.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { DirectivesComponent } from './directives/directives.component';
import { MagicDirective } from './directives/magic.directive';
import { AbcComponent } from './abc/abc.component';
import { PqrComponent } from './pqr/pqr.component';

@NgModule({
  declarations: [
    AppComponent, // components,
    DataComponent, 
    LittleComponent, 
    InteractionComponent, 
    LifecycleComponent, 
    DirectivesComponent, 
    
    MagicDirective, 
    AbcComponent, 
    PqrComponent
  ],
  imports: [
    BrowserModule // submodules
  ],
  providers: [], // we will talk about it later on
  bootstrap: [AppComponent] // is available only in main top level module
})
export class AppModule { }
