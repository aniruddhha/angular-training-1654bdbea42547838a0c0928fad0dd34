import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(
    private httpClient : HttpClient
  ) { }

  getCall() {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/posts/1')
  }
}
