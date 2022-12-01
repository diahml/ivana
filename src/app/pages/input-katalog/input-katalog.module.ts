import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InputKatalogPageRoutingModule } from './input-katalog-routing.module';

import { InputKatalogPage } from './input-katalog.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InputKatalogPageRoutingModule
  ],
  declarations: [InputKatalogPage]
})
export class InputKatalogPageModule {}
