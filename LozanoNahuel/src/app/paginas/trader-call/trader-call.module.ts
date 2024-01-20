import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TraderCallPageRoutingModule } from './trader-call-routing.module';

import { TraderCallPage } from './trader-call.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TraderCallPageRoutingModule
  ],
  declarations: [TraderCallPage]
})
export class TraderCallPageModule {}
