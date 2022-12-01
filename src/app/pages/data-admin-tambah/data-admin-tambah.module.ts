import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DataAdminTambahPageRoutingModule } from './data-admin-tambah-routing.module';

import { DataAdminTambahPage } from './data-admin-tambah.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DataAdminTambahPageRoutingModule
  ],
  declarations: [DataAdminTambahPage]
})
export class DataAdminTambahPageModule {}
