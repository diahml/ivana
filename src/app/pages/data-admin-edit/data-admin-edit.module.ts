import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DataAdminEditPageRoutingModule } from './data-admin-edit-routing.module';

import { DataAdminEditPage } from './data-admin-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DataAdminEditPageRoutingModule
  ],
  declarations: [DataAdminEditPage]
})
export class DataAdminEditPageModule {}
