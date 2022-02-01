import { Component, OnInit } from '@angular/core';
import { CowService } from '../cow.service';

@Component({
  selector: 'app-pqr',
  templateUrl: './pqr.component.html',
  styleUrls: ['./pqr.component.css']
})
export class PqrComponent implements OnInit {

  url = ''
  constructor(
    private cow : CowService // pqr component is dependent on cow service
  ) { }

  ngOnInit(): void {
    this.url = this.cow.config.url
  }


  onPqr() {
    this.cow.config.url = 'pqr.com'
  }

  onRefresh() {
    this.url = this.cow.config.url
  }
}
