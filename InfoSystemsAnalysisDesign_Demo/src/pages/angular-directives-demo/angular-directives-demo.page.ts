import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { from } from 'rxjs';

@Component({
  selector: 'app-angular-directives-demo',
  templateUrl: './angular-directives-demo.page.html',
  styleUrls: ['./angular-directives-demo.page.scss'],
})
export class AngularDirectivesDemoPage {

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



// []][][][][]][][][][][][][[]][][][][][][][][]]][][][][][][][][][][][][][][][][]]][][][]][][][][][]][]]][][]][]
  
  

  //This variable is bound to the view through the [(NgModel)] directive
  demonstrationSelection: any;
  
  //This variable is bound to the view through the [(NgModel)] directive 
  colorSelection: any;

  //This variable is bound to the view through the [(NgModel)] directive 
  textBoxEntry: any;




  // []][][][][]][][][][][][][[]][][][][][][][][]]][][][][][][][][][][][][][][][][]]][][][]][][][][][]][]]][][]][]
  


  //Display the popup message
  async displayMessage() {
    const toast = await this.toastController.create({
      message: this.textBoxEntry,
      position: "middle",
      duration: 2000
    });
    toast.present();
  }


  //------------------------------------------------------------------------------------------------------


  
  //The parameter name is arbitrary, it is just used to catch the value passed from the view
  changeLogoColor(color) {
    //We passed the value into this function and bound it to the variable "colorSelection"
    //We did this in opposition to [(NgModel)] because [(NgModel)] is not supported on pictures 
    this.colorSelection = color;
  }

}
