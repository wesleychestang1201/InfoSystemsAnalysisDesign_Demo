import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
var HomePage = /** @class */ (function () {
    function HomePage(router) {
        this.router = router;
    }
    ;
    //Navigate to the "Angular Directives Explanation" page
    HomePage.prototype.navigateToDiagramPage = function () {
        this.router.navigate(['angular-directives-explanation']);
    };
    //Clicking the "AngularCard" calles the function
    HomePage.prototype.restyleHomepage = function () {
        //Change properties of these elements which are refered to by their ID value
        setTimeout(function () { return document.getElementById("pageTitle").innerText = "ANGULAR !"; }, 1000);
        //AngularCard
        document.getElementById("angularCard").style.animationPlayState = "running";
        //I don't know why... but the element resets to its pre CSS animation state when the animation ends
        //This can be circumvented by statically setting the Elements property using a timer that is the same length as the animation
        //The gives the effect of having seemlessly animated from one state to another...as it should anyway
        setTimeout(function () { return document.getElementById("angularCard").style.boxShadow = "0px 0px 100px 40px #FABC02"; }, 1000);
        //On each of the three cards below we use SIMILAR logic as described above
        //Slightly before the CSS animation to reduce their opacity from 1 to 0 ends, we set the display property to "none"
        //The 50 Millisecond lead is to account for visual bugs and rendering lag 
        //MongoCard
        document.getElementById("mongoCard").style.animationPlayState = "running";
        setTimeout(function () { return document.getElementById("mongoCard").style.display = "none"; }, 950);
        //ExpressCard
        document.getElementById("expressCard").style.animationPlayState = "running";
        setTimeout(function () { return document.getElementById("expressCard").style.display = "none"; }, 950);
        //NodeCard
        document.getElementById("nodeCard").style.animationPlayState = "running";
        setTimeout(function () { return document.getElementById("nodeCard").style.display = "none"; }, 950);
        //The "clickMeButton" uses the logic described above but in reverse as it is becoming visible
        //ClickMeButton
        setTimeout(function () { return document.getElementById("clickMeButton").style.display = "block"; }, 1000);
        document.getElementById("clickMeButton").style.animationPlayState = "running";
    };
    HomePage = tslib_1.__decorate([
        Component({
            selector: 'app-home',
            templateUrl: 'home.page.html',
            styleUrls: ['home.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], HomePage);
    return HomePage;
}());
export { HomePage };
//# sourceMappingURL=home.page.js.map