import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnfriamientoPageRoutingModule } from './enfriamiento-routing.module';

import { EnfriamientoPage } from './enfriamiento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnfriamientoPageRoutingModule
  ],
  declarations: [EnfriamientoPage]
})
export class EnfriamientoPageModule {}
