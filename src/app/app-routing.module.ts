import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'flex-chart-demo',
    pathMatch: 'full'
  },
  { path: 'flex-chart-demo', loadChildren: './flex-chart-demo/flex-chart-demo.module#FlexChartDemoPageModule' },
  { path: 'flex-grid-demo', loadChildren: './flex-grid-demo/flex-grid-demo.module#FlexGridDemoPageModule' },
  { path: 'input-demo', loadChildren: './input-demo/input-demo.module#InputDemoPageModule' },
  { path: 'nav-demo', loadChildren: './nav-demo/nav-demo.module#NavDemoPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
