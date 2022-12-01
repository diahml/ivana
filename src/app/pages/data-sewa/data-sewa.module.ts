import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DataSewaPageRoutingModule } from './data-sewa-routing.module';

import { DataSewaPage } from './data-sewa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DataSewaPageRoutingModule
  ],
  declarations: [DataSewaPage]
})
export class DataSewaPageModule {}
