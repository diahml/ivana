import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DataAdminPageRoutingModule } from './data-admin-routing.module';

import { DataAdminPage } from './data-admin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DataAdminPageRoutingModule
  ],
  declarations: [DataAdminPage]
})
export class DataAdminPageModule {}
