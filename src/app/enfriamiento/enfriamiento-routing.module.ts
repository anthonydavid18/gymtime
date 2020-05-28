import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnfriamientoPage } from './enfriamiento.page';

const routes: Routes = [
  {
    path: '',
    component: EnfriamientoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnfriamientoPageRoutingModule {}
