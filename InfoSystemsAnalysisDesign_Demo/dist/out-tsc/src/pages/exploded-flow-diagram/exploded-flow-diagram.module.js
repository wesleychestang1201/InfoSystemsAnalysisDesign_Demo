import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ExplodedFlowDiagramPage } from './exploded-flow-diagram.page';
var routes = [
    {
        path: '',
        component: ExplodedFlowDiagramPage
    }
];
var ExplodedFlowDiagramPageModule = /** @class */ (function () {
    function ExplodedFlowDiagramPageModule() {
    }
    ExplodedFlowDiagramPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [ExplodedFlowDiagramPage]
        })
    ], ExplodedFlowDiagramPageModule);
    return ExplodedFlowDiagramPageModule;
}());
export { ExplodedFlowDiagramPageModule };
//# sourceMappingURL=exploded-flow-diagram.module.js.map