import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DriversRoutingModule } from './drivers-routing.module';
import { DriversComponent } from './drivers.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';  
import { MatChipsModule } from '@angular/material/chips'; 
import { MatButtonModule } from '@angular/material/button';




@NgModule({
  declarations: [
    DriversComponent
  ],
  imports: [
    CommonModule,
    DriversRoutingModule,
    MatToolbarModule,
    MatTableModule,
    MatChipsModule,
    MatButtonModule,
  ]
})
export class DriversModule { }
