import { Component, OnInit } from '@angular/core';
import { CowService } from '../cow.service';

@Component({
  selector: 'app-abc',
  templateUrl: './abc.component.html',
  styleUrls: ['./abc.component.css']
})
export class AbcComponent implements OnInit {

  url : string = ''

  constructor(
    private cow : CowService // abc component is dependent on cow service
  ) { }

  ngOnInit(): void {
    this.url = this.cow.config.url
  }

  onAbc() {
    this.cow.config.url = 'abc.com'
  }

  onRefresh() {
    this.url = this.cow.config.url
  }

}
