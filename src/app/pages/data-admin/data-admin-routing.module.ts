import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DataAdminPage } from './data-admin.page';

const routes: Routes = [
  {
    path: '',
    component: DataAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DataAdminPageRoutingModule {}
