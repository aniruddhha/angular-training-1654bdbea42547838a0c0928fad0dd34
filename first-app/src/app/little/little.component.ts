import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

// ng g c little

@Component({
  selector: 'app-little',
  templateUrl: './little.component.html',
  styleUrls: ['./little.component.css']
})
export class LittleComponent implements OnInit {

  @Input()
  text : string = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis, ea! Illum obcaecati dolor ad culpa, nihil esse! Facere dignissimos voluptas, soluta laudantium cumque maiores. Delectus velit ab temporibus impedit aspernatur!'

  @Output()
  paraClk : EventEmitter<string> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  onClk() {
    this.paraClk.emit(this.text.split(' ')[0])
  }

}
