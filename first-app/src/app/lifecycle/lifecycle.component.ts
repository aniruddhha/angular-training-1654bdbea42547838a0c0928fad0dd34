import { Component, Input, SimpleChanges } from '@angular/core';
import { 
  // angular goes through below stategs, that are called lifecycle hooks or events

  OnChanges, // multiple times if custom property is there
  OnInit, // only once
  AfterContentInit,  // only once
  AfterContentChecked, // multiple times
  AfterViewInit, // only once
  AfterViewChecked, // multiple times
  OnDestroy // only once
} from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnChanges, OnInit, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy  {

  @Input()
  date = 'abc'

  constructor() { console.log('constructor') }

  ngOnChanges(sm : SimpleChanges): void { console.log('ngOnChanges', sm) }

  ngOnInit(): void { console.log('ngOnInit') }

  ngAfterContentInit(): void { console.log('ngAfterContentInit') }

  ngAfterContentChecked(): void { console.log('ngAfterContentChecked') }

  ngAfterViewInit(): void { console.log('ngAfterViewInit') }

  ngAfterViewChecked(): void { console.log('ngAfterViewChecked') }

  ngOnDestroy(): void { console.log('ngOnDestroy') }
}
// what do you mean by content and what do you mean by view ?