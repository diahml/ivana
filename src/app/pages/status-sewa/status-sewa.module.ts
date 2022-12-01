import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StatusSewaPageRoutingModule } from './status-sewa-routing.module';

import { StatusSewaPage } from './status-sewa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StatusSewaPageRoutingModule
  ],
  declarations: [StatusSewaPage]
})
export class StatusSewaPageModule {}
