import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormPinjamPageRoutingModule } from './form-pinjam-routing.module';

import { FormPinjamPage } from './form-pinjam.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormPinjamPageRoutingModule
  ],
  declarations: [FormPinjamPage]
})
export class FormPinjamPageModule {}
