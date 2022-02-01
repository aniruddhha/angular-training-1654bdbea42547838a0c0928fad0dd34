import { Component } from '@angular/core';

@Component({
  selector: 'app-interaction',
  templateUrl: './interaction.component.html',
  styleUrls: ['./interaction.component.css']
})
export class InteractionComponent {

  userName = 'abcaksjdakhkadhj'
  image = 'https://angular.io/assets/images/logos/angular/logo-nav@2x.png'
  obSt = {
    border : '1px solid red',
    width : '100px',
    height : '100px'
  }

  num1 = 10
  num2 = 30

  constructor() { }

  addNums() {
    return this.num1 + this.num2
  }

  today() {
    return new Date()
  }

  onClickOkay() {
    this.userName = 'some pqr'
  }

  onNameChange(md : any) {
    const dt = md.target['value']
    console.log(dt)
    this.userName = dt
  }
}
