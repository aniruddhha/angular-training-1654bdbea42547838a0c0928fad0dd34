import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {

  today = new Date()
  user  = ''

  constructor(
    private actRt : ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.actRt.params.subscribe( prm => this.user = prm['user'] )
  }

}
