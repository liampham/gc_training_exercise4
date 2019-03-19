import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FlexGridDemoPage } from './flex-grid-demo.page';

const routes: Routes = [
  {
    path: '',
    component: FlexGridDemoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FlexGridDemoPage]
})
export class FlexGridDemoPageModule {}
