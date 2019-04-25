import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';
var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadChildren: 'src/pages/home/home.module#HomePageModule' },
    { path: 'home-page', loadChildren: 'src/pages/home/home.module#HomePageModule' },
    { path: 'exploded-flow-diagram', loadChildren: 'src/pages/exploded-flow-diagram/exploded-flow-diagram.module#ExplodedFlowDiagramPageModule' },
    { path: 'angular-directives-explanation', loadChildren: 'src/pages/angular-directives-explanation/angular-directives-explanation.module#AngularDirectivesExplanationPageModule' },
    { path: 'angular-directives-demo', loadChildren: 'src/pages/angular-directives-demo/angular-directives-demo.module#AngularDirectivesDemoPageModule' },
    { path: 'angular-directives-demo-thirty-min', loadChildren: 'src/pages/angular-directives-demo-thirty-min/angular-directives-demo-thirty-min.module#AngularDirectivesDemoThirtyMinPageModule' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [
                RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
            ],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map