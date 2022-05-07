import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderInfoRoutingModule } from './order-info-routing.module';
import { OrderInfoComponent } from './order-info.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';  
import { MatChipsModule } from '@angular/material/chips'; 
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card'; 


@NgModule({
  declarations: [
    OrderInfoComponent
  ],
  imports: [
    CommonModule,
    OrderInfoRoutingModule,
    MatToolbarModule,
    MatTableModule,
    MatChipsModule,
    MatButtonModule,
    MatCardModule
  ]
})
export class OrderInfoModule { }
