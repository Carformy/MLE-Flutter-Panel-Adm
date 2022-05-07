import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapsRoutingModule } from './maps-routing.module';
import { MapsComponent } from './maps.component';


import { MatToolbarModule } from '@angular/material/toolbar';
import { MatChipsModule } from '@angular/material/chips'; 
import { MatIconModule } from '@angular/material/icon'; 


@NgModule({
  declarations: [
    MapsComponent
  ],
  imports: [
    CommonModule,
    MapsRoutingModule,
    MatChipsModule,
    MatToolbarModule,
    MatIconModule
  ]
})
export class MapsModule { }
