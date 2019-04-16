import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {




  //Clicking the "AngularCard" calles the function
  restyleHomepage() {
    //Change properties of these elements which are refered to by their ID value
    document.getElementById("pageTitle").innerText = "ANGULAR !"
    document.getElementById("angularCard").style.boxShadow = "0px 0px 100px 40px #FABC02"

    //Changing the display style will designate whether a given element exists on the page or not
    document.getElementById("clickMeButton").style.display = "block"
    document.getElementById("mongoCard").style.display = "none"
    document.getElementById("expressCard").style.display = "none"
    document.getElementById("nodeCard").style.display = "none"
  }

}
