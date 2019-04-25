import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { from } from 'rxjs';

@Component({
  selector: 'app-angular-directives-demo-thirty-min',
  templateUrl: './angular-directives-demo-thirty-min.page.html',
  styleUrls: ['./angular-directives-demo-thirty-min.page.scss'],
})

export class AngularDirectivesDemoThirtyMinPage {

  //#region ClassVariables and Constructor


  //This variable is bound to the view through the [(NgModel)] directive
  demonstrationSelection: any;
  
  //This variable is bound to the view through the [(NgModel)] directive 
  textBoxEntry: any;

  //These variables is bound to the view through the [(NgModel)] directive 
  psuedoLoginUsernameTextBoxEntry: any;
  psuedoLoginPasswordTextBoxEntry: any;
  loggedIn: any;

  //This variable is bound to a value which is passed in from a function invoked through user interaction with the view
  colorSelection: any;




  // []][][][][]][][][][][][][[]][][][][][][][][]]][][][][][][][][][][][][][][][][]]][][][][][][][][]][]]][][][]
  


  //We will create a class levle array which can be iterated through in the view
  colors = [];

  //This is an example of an object
  //An object can hold multiple values (attributes) of multiple types under one name, in this case "person"
  person = {
    name: "",
    message: "",
    favoriteColor: "",
  }
  

  //The constructor is used to instantiate any variables or representations of imports such as alert controllers
  constructor(public toastController: ToastController) { 
  //Populate the array with values statically, for simplicity of demonstration
  //However, this can not only be done dynamically, but from a database via certain methods
  this.colors = ['Purple', 'Blue', 'Red', 'Grey'];

  }
  //#endregion




  //#region DisplayMessage
  //Display the popup message
  async displayMessage() {
    const toast = await this.toastController.create({
      message: this.textBoxEntry,
      position: "middle",
      duration: 2000
    });
    toast.present();
  }
  //#endregion

  


  //#region ChangeLogoColor
  //The parameter name is arbitrary, it is just used to catch the value passed from the view
  changeLogoColor(color) {
    //We passed the value into this function and bound it to the variable "colorSelection"
    //We did this in opposition to [(NgModel)] because [(NgModel)] is not supported on pictures 
    this.colorSelection = color;
  }
  //#endregion




  //#region ChangeLoggedInStatus
  changeLoggedInStatus() {
    console.log(this.psuedoLoginPasswordTextBoxEntry)
    //If both the username and the password variables have value...
    if (this.psuedoLoginUsernameTextBoxEntry && this.psuedoLoginPasswordTextBoxEntry) {
      //Set the logged in flag to true
      this.loggedIn = "true"
    }
  }


  //#region
}
