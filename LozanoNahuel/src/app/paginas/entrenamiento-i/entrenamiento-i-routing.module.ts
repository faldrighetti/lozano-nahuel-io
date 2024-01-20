import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EntrenamientoIPage } from './entrenamiento-i.page';

const routes: Routes = [
  {
    path: '',
    component: EntrenamientoIPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EntrenamientoIPageRoutingModule {}
