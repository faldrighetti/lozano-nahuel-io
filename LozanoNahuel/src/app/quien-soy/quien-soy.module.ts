import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuienSoyPageRoutingModule } from './quien-soy-routing.module';

import { QuienSoyPage } from './quien-soy.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuienSoyPageRoutingModule
  ],
  declarations: [QuienSoyPage]
})
export class QuienSoyPageModule {}
