import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StatusSewaPage } from './status-sewa.page';

const routes: Routes = [
  {
    path: '',
    component: StatusSewaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StatusSewaPageRoutingModule {}
