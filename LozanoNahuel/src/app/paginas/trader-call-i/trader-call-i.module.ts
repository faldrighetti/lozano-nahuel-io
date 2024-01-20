import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TraderCallIPageRoutingModule } from './trader-call-i-routing.module';

import { TraderCallIPage } from './trader-call-i.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TraderCallIPageRoutingModule
  ],
  declarations: [TraderCallIPage]
})
export class TraderCallIPageModule {}
