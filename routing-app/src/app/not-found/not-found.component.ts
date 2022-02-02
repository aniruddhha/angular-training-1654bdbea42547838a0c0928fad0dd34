import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { custObs } from './cust-obs';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit, OnDestroy {

  private sub : Subscription = new Subscription()

  constructor() { }

  ngOnInit(): void {
  
    // observables remains in the memory
    //  even after component gets destroyed
   this.sub = custObs().subscribe({
      next: num => console.log(`Next Event ${num}`),
      error: err => console.log(`You Got an Error ${err}`),
      complete: () => console.log(`Completed`)
    })
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }
}
