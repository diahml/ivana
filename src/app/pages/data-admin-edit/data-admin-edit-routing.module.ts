import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DataAdminEditPage } from './data-admin-edit.page';

const routes: Routes = [
  {
    path: '',
    component: DataAdminEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DataAdminEditPageRoutingModule {}
