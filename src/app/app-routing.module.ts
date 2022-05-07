import { RouterModule, Routes } from '@angular/router';
import {
  canActivate,
  redirectLoggedInTo,
  redirectUnauthorizedTo,
} from '@angular/fire/auth-guard';

import { NgModule } from '@angular/core';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['dashboard']);

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./features/auth/auth.module').then((m) => m.AuthModule),
    ...canActivate(redirectLoggedInToHome),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./features/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
    ...canActivate(redirectUnauthorizedToLogin),
  },
  { path: 'drivers', loadChildren: () => import('./pages/drivers/drivers.module').then(m => m.DriversModule) },
  { path: 'passengers', loadChildren: () => import('./pages/passengers/passengers.module').then(m => m.PassengersModule) },
  { path: 'orders', loadChildren: () => import('./pages/orders/orders.module').then(m => m.OrdersModule) },
  { path: 'maps', loadChildren: () => import('./maps/maps.module').then(m => m.MapsModule) },
  { path: 'driverInfo/:id', loadChildren: () => import('./driver-info/driver-info.module').then(m => m.DriverInfoModule) },
  { path: 'customerInfo/:id', loadChildren: () => import('./customer-info/customer-info.module').then(m => m.CustomerInfoModule) },
  { path: 'orderInfo/:id', loadChildren: () => import('./order-info/order-info.module').then(m => m.OrderInfoModule) },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}