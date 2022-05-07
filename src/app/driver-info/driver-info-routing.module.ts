import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DriverInfoComponent } from './driver-info.component';

const routes: Routes = [{ path: '', component: DriverInfoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DriverInfoRoutingModule { }
