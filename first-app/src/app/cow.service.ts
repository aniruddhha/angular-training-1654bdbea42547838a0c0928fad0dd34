import { Injectable } from '@angular/core';

//ng g s name
@Injectable({ // means this object can be injected to other components
  providedIn: 'root' // means this service is initilized at the time of initilizing App/Root Module
})// which means, service is available for all the components in the App/Root module
export class CowService {

  private _config = {
    url : 'xyz.com',
    protocol : 'http'
  }

  constructor() { }

  set config(cfg : any) {
    this._config = cfg
  }

  get config() { return this._config }
}
