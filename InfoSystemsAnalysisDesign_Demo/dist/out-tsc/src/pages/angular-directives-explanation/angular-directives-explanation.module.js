import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AngularDirectivesExplanationPage } from './angular-directives-explanation.page';
var routes = [
    {
        path: '',
        component: AngularDirectivesExplanationPage
    }
];
var AngularDirectivesExplanationPageModule = /** @class */ (function () {
    function AngularDirectivesExplanationPageModule() {
    }
    AngularDirectivesExplanationPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [AngularDirectivesExplanationPage]
        })
    ], AngularDirectivesExplanationPageModule);
    return AngularDirectivesExplanationPageModule;
}());
export { AngularDirectivesExplanationPageModule };
//# sourceMappingURL=angular-directives-explanation.module.js.map