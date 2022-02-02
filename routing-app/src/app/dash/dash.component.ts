import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestApiService } from '../login/rest-api.service';
import { Post } from './post.domain';

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

    this.restApi.getRequest().subscribe( {
      next : res => this.posts = res as Array<Post>
    })
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
