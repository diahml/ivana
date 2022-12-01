import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InputKatalogPage } from './input-katalog.page';

const routes: Routes = [
  {
    path: '',
    component: InputKatalogPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InputKatalogPageRoutingModule {}
