import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-angular-directives-explanation',
  templateUrl: './angular-directives-explanation.page.html',
  styleUrls: ['./angular-directives-explanation.page.scss'],
})
export class AngularDirectivesExplanationPage {

  constructor(private router: Router, ) {
  };

   //Navigate to the "Angular Directives Demo" page
   navigateToDemoPage() {
    this.router.navigate(['angular-directives-demo']);
  }

  //Show the "ClickMe" Button
  showClickMeAgainButton() {
    document.getElementById("ClickMeAgainButton").style.display = "block"
    document.getElementById("ClickMeAgainButton").style.animationPlayState = "running";
  }
}
