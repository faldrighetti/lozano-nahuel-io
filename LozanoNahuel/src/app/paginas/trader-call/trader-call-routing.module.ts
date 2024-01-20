import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TraderCallPage } from './trader-call.page';

const routes: Routes = [
  {
    path: '',
    component: TraderCallPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TraderCallPageRoutingModule {}
