import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DataMobilPage } from './data-mobil.page';

const routes: Routes = [
  {
    path: '',
    component: DataMobilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DataMobilPageRoutingModule {}
