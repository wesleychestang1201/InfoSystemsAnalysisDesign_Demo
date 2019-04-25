import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
var AngularDirectivesExplanationPage = /** @class */ (function () {
    //The constructor is used to instantiate any variables or representations of imports such as alert controllers
    function AngularDirectivesExplanationPage(toastController, router) {
        this.toastController = toastController;
        this.router = router;
    }
    // []][][][][]][][][][][][][[]][][][][][][][][]]][][][][][][][][][][][][][][][][]]][][][]][][][][][]][]]][][]][]
    //Navigate to the "Angular Directives Demo" page or "Angular Directives Demo Thirty Min" respective to the toggled choice
    AngularDirectivesExplanationPage.prototype.navigateToDemoPage = function () {
        if (this.demoTypeSelection) {
            //Navigate to the 15 min demo if chosen
            if (this.demoTypeSelection == 15) {
                this.router.navigate(['angular-directives-demo']);
            }
            //Navigate to the 30 min demo if chosen 
            if (this.demoTypeSelection == 30) {
                this.router.navigate(['angular-directives-demo-thirty-min']);
            }
        }
        else {
            this.displayMessage();
        }
    };
    //#region PopupMessage
    //Display the popup message if the user did not select a demonstration length
    AngularDirectivesExplanationPage.prototype.displayMessage = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var toast;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: 'Please Select a Demonstration Length!',
                            position: "middle",
                            duration: 2500
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    //#endregion
    //Show the "DemoTypeSelection Controls" Button
    AngularDirectivesExplanationPage.prototype.showDemoTypeSelection = function () {
        //Change the element display from "none" to "block", making it render on the view
        document.getElementById("DemoTypeSelection").style.display = "block";
        //Begin the animation attatched to the element 
        document.getElementById("DemoTypeSelection").style.animationPlayState = "running";
    };
    //Manage the state(s) of the two toggle controls as one or the other are selected
    AngularDirectivesExplanationPage.prototype.manageToggleControls = function (toggleSelection) {
        //Set the value of the selection relative the numerical identfier passed by either control  / bind it to the class level variable
        this.demoTypeSelection = toggleSelection;
    };
    AngularDirectivesExplanationPage = tslib_1.__decorate([
        Component({
            selector: 'app-angular-directives-explanation',
            templateUrl: './angular-directives-explanation.page.html',
            styleUrls: ['./angular-directives-explanation.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ToastController,
            Router])
    ], AngularDirectivesExplanationPage);
    return AngularDirectivesExplanationPage;
}());
export { AngularDirectivesExplanationPage };
//# sourceMappingURL=angular-directives-explanation.page.js.map