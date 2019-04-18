import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-directives-explanation',
  templateUrl: './angular-directives-explanation.page.html',
  styleUrls: ['./angular-directives-explanation.page.scss'],
})
export class AngularDirectivesExplanationPage {

  constructor() { 

  }

  

  //Show the "ClickMe" Button
  showClickMeButton() {
    document.getElementById("clickMeButton").style.display = "block"
    document.getElementById("clickMeButton").style.animationPlayState = "running";
  }
}
