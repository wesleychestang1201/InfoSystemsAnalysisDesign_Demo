import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-angular-directives-explanation',
  templateUrl: './angular-directives-explanation.page.html',
  styleUrls: ['./angular-directives-explanation.page.scss'],
})
export class AngularDirectivesExplanationPage {


  //Class variable for the type of demonstration to peform, bound to a selection in the view
  demoTypeSelection: any;


  //The constructor is used to instantiate any variables or representations of imports such as alert controllers
  constructor(
    public toastController: ToastController,
    private router: Router) {
  }





  // []][][][][]][][][][][][][[]][][][][][][][][]]][][][][][][][][][][][][][][][][]]][][][]][][][][][]][]]][][]][]





  //Navigate to the "Angular Directives Demo" page or "Angular Directives Demo Thirty Min" respective to the toggled choice
  navigateToDemoPage() {
    if (this.demoTypeSelection) {
      //Navigate to the 15 min demo if chosen
      if (this.demoTypeSelection == 15) {
        this.router.navigate(['angular-directives-demo']);
      }
      //Navigate to the 30 min demo if chosen 
      if (this.demoTypeSelection == 30) {
        this.router.navigate(['angular-directives-demo-thirty-min']);
      }
    } else {
      this.displayMessage()
    }
  }




  //#region PopupMessage
  //Display the popup message if the user did not select a demonstration length
  async displayMessage() {
    const toast = await this.toastController.create({
      message: 'Please Select a Demonstration Length!',
      position: "middle",
      duration: 2500
    });
    toast.present();
  }
  //#endregion




  //Show the "DemoTypeSelection Controls" Button
  showDemoTypeSelection() {
    //Change the element display from "none" to "block", making it render on the view
    document.getElementById("DemoTypeSelection").style.display = "block"
    //Begin the animation attatched to the element 
    document.getElementById("DemoTypeSelection").style.animationPlayState = "running";
  }


  //Manage the state(s) of the two toggle controls as one or the other are selected
  manageToggleControls(toggleSelection) {
    //Set the value of the selection relative the numerical identfier passed by either control  / bind it to the class level variable
    this.demoTypeSelection = toggleSelection
  }
}
