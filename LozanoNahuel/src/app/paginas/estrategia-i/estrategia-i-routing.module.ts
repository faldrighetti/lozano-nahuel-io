import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EstrategiaIPage } from './estrategia-i.page';

const routes: Routes = [
  {
    path: '',
    component: EstrategiaIPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstrategiaIPageRoutingModule {}
