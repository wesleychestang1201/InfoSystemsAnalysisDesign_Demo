import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ExplodedFlowDiagramPage } from './exploded-flow-diagram.page';

const routes: Routes = [
  {
    path: '',
    component: ExplodedFlowDiagramPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ExplodedFlowDiagramPage]
})
export class ExplodedFlowDiagramPageModule {}
