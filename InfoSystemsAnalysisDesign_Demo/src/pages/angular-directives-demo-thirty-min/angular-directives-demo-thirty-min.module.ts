import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AngularDirectivesDemoThirtyMinPage } from './angular-directives-demo-thirty-min.page';

const routes: Routes = [
  {
    path: '',
    component: AngularDirectivesDemoThirtyMinPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AngularDirectivesDemoThirtyMinPage]
})
export class AngularDirectivesDemoThirtyMinPageModule {}
