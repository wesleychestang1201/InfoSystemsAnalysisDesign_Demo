import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router, ) {
  };


  //Navigate to the "Exploded Flow Diagram" page
  navigateToDiagramPage() {
    this.router.navigate(['exploded-flow-diagram']);
  }


  //Clicking the "AngularCard" calles the function
  restyleHomepage() {
    //Change properties of these elements which are refered to by their ID value
    setTimeout(() => document.getElementById("pageTitle").innerText = "ANGULAR !", 1000);

    //AngularCard
    document.getElementById("angularCard").style.animationPlayState = "running";
    //I don't know why... but the element resets to its pre CSS animation state when the animation ends
    //This can be circumvented by statically setting the Elements property using a timer that is the same length as the animation
    //The gives the effect of having seemlessly animated from one state to another...as it should anyway
    setTimeout(() => document.getElementById("angularCard").style.boxShadow = "0px 0px 100px 40px #FABC02", 1000)
    
    //On each of the three cards below we use SIMILAR logic as described above
    //Slightly before the CSS animation to reduce their opacity from 1 to 0 ends, we set the display property to "none"
    //The 50 Millisecond lead is to account for visual bugs and rendering lag 

    //MongoCard
    document.getElementById("mongoCard").style.animationPlayState = "running";
    setTimeout(() => document.getElementById("mongoCard").style.display = "none", 950)
    
    //ExpressCard
    document.getElementById("expressCard").style.animationPlayState = "running";
    setTimeout(() => document.getElementById("expressCard").style.display = "none", 950)
    
    //NodeCard
    document.getElementById("nodeCard").style.animationPlayState = "running";
    setTimeout(() => document.getElementById("nodeCard").style.display = "none", 950)


    //The "clickMeButton" uses the logic described above but in reverse as it is becoming visible

    //ClickMeButton
    setTimeout(() => document.getElementById("clickMeButton").style.display = "block", 1000)
    document.getElementById("clickMeButton").style.animationPlayState = "running";
  }

}
