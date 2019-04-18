import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AngularDirectivesDemoPage } from './angular-directives-demo.page';

const routes: Routes = [
  {
    path: '',
    component: AngularDirectivesDemoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AngularDirectivesDemoPage]
})
export class AngularDirectivesDemoPageModule {}
