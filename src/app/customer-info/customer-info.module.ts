import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerInfoRoutingModule } from './customer-info-routing.module';
import { CustomerInfoComponent } from './customer-info.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';  
import { MatChipsModule } from '@angular/material/chips'; 
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    CustomerInfoComponent
  ],
  imports: [
    CommonModule,
    CustomerInfoRoutingModule,
    MatToolbarModule,
    MatTableModule,
    MatChipsModule,
    MatButtonModule,
    MatCardModule
  ]
})
export class CustomerInfoModule { }
