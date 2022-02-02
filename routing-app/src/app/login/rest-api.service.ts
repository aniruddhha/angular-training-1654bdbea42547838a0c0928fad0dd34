import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../dash/post.domain';
import { map, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  constructor(
    private httpClient : HttpClient
  ) { }

  getRequest() : Observable<Array<Post>> {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/posts')
      .pipe( // is function which combines multiple operators
        map(res => res as Array<Post>), // for converting one observable to another observable
        catchError( err => of(err) ) // you will receive an error, you have created obervable out of that error
      )
  }

  postData(post : Post) {
    return this.httpClient.post('https://jsonplaceholder.typicode.com/posts', post)
  }

  deleteData() {
    this.httpClient.delete('')
    this.httpClient.put('', {})
  }
}
