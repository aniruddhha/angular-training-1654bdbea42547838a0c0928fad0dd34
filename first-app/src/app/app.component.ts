import { Component } from '@angular/core';

// what do component ?

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
}) // decorator -> annotation
export class AppComponent {
  title = 'first-app';
  isShow = false

  onBtnClk() {
    this.isShow = !this.isShow
  }

  onNowDate() {
    this.title = new Date().toISOString()
  }
}
