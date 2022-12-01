import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormPinjamPage } from './form-pinjam.page';

const routes: Routes = [
  {
    path: '',
    component: FormPinjamPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormPinjamPageRoutingModule {}
