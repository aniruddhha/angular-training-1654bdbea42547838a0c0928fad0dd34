import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  user = ''
  
  constructor(
    private actRt : ActivatedRoute
  ) { }

  //http://localhost:4200/users/1 => id = 1

  ngOnInit(): void {

    this.actRt.params.subscribe( prm => this.user = prm['id']  )

  }

}
