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

  onBtnClk() {
    this.isShow = !this.isShow
  }

  onNowDate() {
    this.title = new Date().toISOString()
  }

  onParaClk(dt : string) {
    console.log(dt)
  }
}

if (typeof Worker !== 'undefined') {
  // Create a new
  const worker = new Worker(new URL('./app.worker', import.meta.url));
  worker.onmessage = ({ data }) => {
    console.log(`page got message: ${data}`);
  };
  worker.postMessage('hello');
} else {
  // Web Workers are not supported in this environment.
  // You should add a fallback so that your program still executes correctly.
}