import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './orders.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';  
import { MatChipsModule } from '@angular/material/chips'; 
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    OrdersComponent
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    MatToolbarModule,
    MatTableModule,
    MatChipsModule,
    MatButtonModule
  ]
})
export class OrdersModule { }
