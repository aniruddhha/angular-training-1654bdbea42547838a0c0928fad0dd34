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

  constructor() { }
}
