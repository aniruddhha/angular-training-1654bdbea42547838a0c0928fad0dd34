import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

//ng g s name
// which means, service is available for all the components in the App/Root module
@Injectable({ providedIn : 'root' })
export class CowService { // Cow Service is dependent on Logger Service

  private _config = {
    url : 'xyz.com',
    protocol : 'http'
  }

  constructor(
    private logger : LoggerService // injected logging service -> 
  ) { }

  set config(cfg : any) {
    this._config = cfg
  }

  get config() { return this._config }
}
