import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EstrategiaIPageRoutingModule } from './estrategia-i-routing.module';

import { EstrategiaIPage } from './estrategia-i.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EstrategiaIPageRoutingModule
  ],
  declarations: [EstrategiaIPage]
})
export class EstrategiaIPageModule {}
