import { Component } from '@angular/core';

// what do component ?

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
}) // decorator -> annotation
export class AppComponent {
  title = 'Directives are classes that add additional behavior to';
  isShow = false

  date = new Date()
  amount = 123445
  private worker ?: Worker// ? represents it can be null

  constructor() {

    if (typeof Worker !== 'undefined') {
      this.worker = new Worker(new URL('./app.worker', import.meta.url));
      
      this.worker.onmessage = ({ data }) => {
        console.log(`Component Got the Message : ${data.dt}`);
      };
    } 
  }

  onBtnClk() {
    this.isShow = !this.isShow
    this.worker?.postMessage({ dt : 'hi' })
  }

  onNowDate() {
    this.title = new Date().toISOString()
  }

  onParaClk(dt : string) {
    console.log(dt)
  }
}

