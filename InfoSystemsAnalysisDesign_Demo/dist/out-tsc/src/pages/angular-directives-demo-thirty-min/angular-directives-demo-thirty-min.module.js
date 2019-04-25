import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AngularDirectivesDemoThirtyMinPage } from './angular-directives-demo-thirty-min.page';
var routes = [
    {
        path: '',
        component: AngularDirectivesDemoThirtyMinPage
    }
];
var AngularDirectivesDemoThirtyMinPageModule = /** @class */ (function () {
    function AngularDirectivesDemoThirtyMinPageModule() {
    }
    AngularDirectivesDemoThirtyMinPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [AngularDirectivesDemoThirtyMinPage]
        })
    ], AngularDirectivesDemoThirtyMinPageModule);
    return AngularDirectivesDemoThirtyMinPageModule;
}());
export { AngularDirectivesDemoThirtyMinPageModule };
//# sourceMappingURL=angular-directives-demo-thirty-min.module.js.map