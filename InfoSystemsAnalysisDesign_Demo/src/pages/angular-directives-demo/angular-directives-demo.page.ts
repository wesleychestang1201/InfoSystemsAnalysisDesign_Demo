import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-directives-demo',
  templateUrl: './angular-directives-demo.page.html',
  styleUrls: ['./angular-directives-demo.page.scss'],
})
export class AngularDirectivesDemoPage {

  //This variable is bound to the view through the [(NgModel)] directive
  demonstrationSelection: any;

  constructor() { }

  displayInfo() {
    if (this.demonstrationSelection == "twoWayDataBinding") {
    console.log(this.demonstrationSelection)
    }
  }

}
