import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DataSewaPage } from './data-sewa.page';

const routes: Routes = [
  {
    path: '',
    component: DataSewaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DataSewaPageRoutingModule {}
