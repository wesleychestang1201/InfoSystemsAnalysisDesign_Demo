import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: 'src/pages/home/home.module#HomePageModule' },
  { path: 'home-page', loadChildren: 'src/pages/home/home.module#HomePageModule' },
  { path: 'exploded-flow-diagram', loadChildren: 'src/pages/exploded-flow-diagram/exploded-flow-diagram.module#ExplodedFlowDiagramPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
