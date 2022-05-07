import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DriverInfoRoutingModule } from './driver-info-routing.module';
import { DriverInfoComponent } from './driver-info.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';  
import { MatChipsModule } from '@angular/material/chips'; 
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card'; 

@NgModule({
  declarations: [
    DriverInfoComponent
  ],
  imports: [
    CommonModule,
    DriverInfoRoutingModule,
    MatToolbarModule,
    MatTableModule,
    MatChipsModule,
    MatButtonModule,
    MatCardModule,
  ]
})
export class DriverInfoModule { }
