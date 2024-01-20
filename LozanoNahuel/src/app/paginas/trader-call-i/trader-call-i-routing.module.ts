import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TraderCallIPage } from './trader-call-i.page';

const routes: Routes = [
  {
    path: '',
    component: TraderCallIPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TraderCallIPageRoutingModule {}
