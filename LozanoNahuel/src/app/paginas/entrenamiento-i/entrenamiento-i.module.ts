import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EntrenamientoIPageRoutingModule } from './entrenamiento-i-routing.module';

import { EntrenamientoIPage } from './entrenamiento-i.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EntrenamientoIPageRoutingModule
  ],
  declarations: [EntrenamientoIPage]
})
export class EntrenamientoIPageModule {}
