import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AngularDirectivesDemoPage } from './angular-directives-demo.page';
var routes = [
    {
        path: '',
        component: AngularDirectivesDemoPage
    }
];
var AngularDirectivesDemoPageModule = /** @class */ (function () {
    function AngularDirectivesDemoPageModule() {
    }
    AngularDirectivesDemoPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [AngularDirectivesDemoPage]
        })
    ], AngularDirectivesDemoPageModule);
    return AngularDirectivesDemoPageModule;
}());
export { AngularDirectivesDemoPageModule };
//# sourceMappingURL=angular-directives-demo.module.js.map