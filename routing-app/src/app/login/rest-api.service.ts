import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  constructor(
    private httpClient : HttpClient
  ) { }

  getRequest() {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/posts')
  }
}
