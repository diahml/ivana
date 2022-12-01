import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KatalogEditPageRoutingModule } from './katalog-edit-routing.module';

import { KatalogEditPage } from './katalog-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KatalogEditPageRoutingModule
  ],
  declarations: [KatalogEditPage]
})
export class KatalogEditPageModule {}
