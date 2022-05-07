
import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  logout() {
    this.authService
      .logout()
      .then(() => this.router.navigate(['/']))
      .catch((e) => console.log(e.message));
  }

  goToDrivers(){

    this.router.navigate(['/drivers']);
  }

  goToPassengers(){
    this.router.navigate(['/passengers']);
  }

  goToHome(){
    this.router.navigate(['/dashboard']);
  }

  goToOrders(){
    this.router.navigate(['/orders']);
  }

  goToMap(){
    this.router.navigate(['/maps']);
  }
}