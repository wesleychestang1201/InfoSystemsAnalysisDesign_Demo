import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: 'src/pages/home/home.module#HomePageModule' },
  { path: 'home-page', loadChildren: 'src/pages/home/home.module#HomePageModule' },
  { path: 'exploded-flow-diagram', loadChildren: 'src/pages/exploded-flow-diagram/exploded-flow-diagram.module#ExplodedFlowDiagramPageModule' },
  { path: 'angular-directives-explanation', loadChildren: 'src/pages/angular-directives-explanation/angular-directives-explanation.module#AngularDirectivesExplanationPageModule' },
  { path: 'angular-directives-demo', loadChildren: 'src/pages/angular-directives-demo/angular-directives-demo.module#AngularDirectivesDemoPageModule' },
  { path: 'angular-directives-demo-thirty-min', loadChildren: 'src/pages/angular-directives-demo-thirty-min/angular-directives-demo-thirty-min.module#AngularDirectivesDemoThirtyMinPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
