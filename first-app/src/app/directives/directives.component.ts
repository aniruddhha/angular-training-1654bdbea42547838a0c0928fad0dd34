import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  mobiles = [
    'abc', 'pqr', 'lmn', 'xyz'
  ]

  st = {'border' : '1px solid red'}
  constructor() { }

  ngOnInit(): void {
  }

}
