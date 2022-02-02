import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestApiService } from '../login/rest-api.service';
import { Post } from './post.domain';
import { interval } from 'rxjs';


@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {

  today = new Date()
  user  = ''

  posts : Array<Post> = new Array()

  constructor(
    private actRt : ActivatedRoute,
    private restApi : RestApiService
  ) { }

  ngOnInit(): void {

    this.actRt.params.subscribe( prm => this.user = prm['user'] )

    this.restApi.getRequest().subscribe({
      next : res => this.posts = res,
      error : err => console.log(`Error Captured ${err}`) 
    })

    // interval(1000).subscribe( tk =>  this.today = new Date() ) // it is very bad; it is creating data object every second
   
  }

  onSave() {

    const post : Post = {
      id : 1,
      userId : 10,
      title : 'title',
      body :' lskfjslkfjlksgj slgj'
    }

    this.restApi.postData(post).subscribe({
      next : res => console.log(res)
    })

  }
}
