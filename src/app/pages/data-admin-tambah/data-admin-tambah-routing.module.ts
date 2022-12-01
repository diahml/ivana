import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DataAdminTambahPage } from './data-admin-tambah.page';

const routes: Routes = [
  {
    path: '',
    component: DataAdminTambahPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DataAdminTambahPageRoutingModule {}
