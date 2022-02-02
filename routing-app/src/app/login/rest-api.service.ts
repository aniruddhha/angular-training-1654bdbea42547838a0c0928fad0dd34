import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../dash/post.domain';

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

  postData(post : Post) {
    return this.httpClient.post('https://jsonplaceholder.typicode.com/posts', post)
  }

  deleteData() {
    this.httpClient.delete('')
    this.httpClient.put('', {})
  }
}
