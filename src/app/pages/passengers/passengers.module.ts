import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PassengersRoutingModule } from './passengers-routing.module';
import { PassengersComponent } from './passengers.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';  
import { MatChipsModule } from '@angular/material/chips'; 
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    PassengersComponent
  ],
  imports: [
    CommonModule,
    PassengersRoutingModule,
    MatToolbarModule,
    MatTableModule,
    MatChipsModule,
    MatButtonModule
  ]
})
export class PassengersModule { }
