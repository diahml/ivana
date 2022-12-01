import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DataMobilPageRoutingModule } from './data-mobil-routing.module';

import { DataMobilPage } from './data-mobil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DataMobilPageRoutingModule
  ],
  declarations: [DataMobilPage]
})
export class DataMobilPageModule {}
