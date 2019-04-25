import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
var AngularDirectivesDemoThirtyMinPage = /** @class */ (function () {
    //The constructor is used to instantiate any variables or representations of imports such as alert controllers
    function AngularDirectivesDemoThirtyMinPage(toastController) {
        this.toastController = toastController;
        // []][][][][]][][][][][][][[]][][][][][][][][]]][][][][][][][][][][][][][][][][]]][][][][][][][][]][]]][][][]
        //We will create a class levle array which can be iterated through in the view
        this.colors = [];
        //This is an example of an object
        //An object can hold multiple values (attributes) of multiple types under one name, in this case "person"
        this.person = {
            name: "",
            message: "",
            favoriteColor: "",
        };
        //Populate the array with values statically, for simplicity of demonstration
        //However, this can not only be done dynamically, but from a database via certain methods
        this.colors = ['Purple', 'Blue', 'Red', 'Grey'];
    }
    //#endregion
    //#region DisplayMessage
    //Display the popup message
    AngularDirectivesDemoThirtyMinPage.prototype.displayMessage = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var toast;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: this.textBoxEntry,
                            position: "middle",
                            duration: 2000
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
    //#region ChangeLogoColor
    //The parameter name is arbitrary, it is just used to catch the value passed from the view
    AngularDirectivesDemoThirtyMinPage.prototype.changeLogoColor = function (color) {
        //We passed the value into this function and bound it to the variable "colorSelection"
        //We did this in opposition to [(NgModel)] because [(NgModel)] is not supported on pictures 
        this.colorSelection = color;
    };
    AngularDirectivesDemoThirtyMinPage = tslib_1.__decorate([
        Component({
            selector: 'app-angular-directives-demo-thirty-min',
            templateUrl: './angular-directives-demo-thirty-min.page.html',
            styleUrls: ['./angular-directives-demo-thirty-min.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ToastController])
    ], AngularDirectivesDemoThirtyMinPage);
    return AngularDirectivesDemoThirtyMinPage;
}());
export { AngularDirectivesDemoThirtyMinPage };
//# sourceMappingURL=angular-directives-demo-thirty-min.page.js.map