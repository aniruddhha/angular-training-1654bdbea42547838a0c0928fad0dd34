import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users = [
    { userId : 1, userName : 'abc', dob : '1990-01-11', city  :'lmn'  },
    { userId : 2, userName : 'pqr', dob : '1989-04-03', city  :'hhh'  },
    { userId : 3, userName : 'lmn', dob : '1997-08-01', city  :'lpm'  },
    { userId : 4, userName : 'xyz', dob : '1995-11-07', city  :'cvr'  },
    { userId : 5, userName : 'hij', dob : '1993-06-04', city  :'typ'  }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
