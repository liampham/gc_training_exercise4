import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FlexChartDemoPage } from './flex-chart-demo.page';

const routes: Routes = [
  {
    path: '',
    component: FlexChartDemoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FlexChartDemoPage]
})
export class FlexChartDemoPageModule {}
