import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'unit-testing';
  res = 0

  add(num1 : number, num2 : number) {
    this.res = num1 + num2
  }

  onBtn() {
    this.add(89, 10)
  }
}
