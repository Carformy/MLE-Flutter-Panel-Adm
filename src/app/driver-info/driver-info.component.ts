import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';

import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-driver-info',
  templateUrl: './driver-info.component.html',
  styleUrls: ['./driver-info.component.css']
})
export class DriverInfoComponent implements OnInit {

  id: any;
  driverInfo: any;

  orders: any = [];

  longText = "text";

  displayedColumns: string[] = ['weight', 'symbol','carBrand','carModel','carNumber','carType'];

  constructor(private route: ActivatedRoute,private authService: AuthService, private router: Router,db: AngularFireDatabase) 
  {

    this.id = this.route.snapshot.paramMap.get('id');

    console.log(this.id);
 
    const driversRef = db.object('drivers/' + this.id);
 
    driversRef.valueChanges().subscribe((snap) => {
       if (snap != null){
 
         this.driverInfo = snap;

         console.log(this.driverInfo);
       }
        
     });

     const ordersRef = db.list('orders', ref => ref.orderByChild('driverId').equalTo(this.id));


     ordersRef.valueChanges().subscribe(snap => {
       if (snap != null){
 
         this.orders.push(snap);
         console.log(this.orders);
       }
         
     })
   }

  ngOnInit(): void {


  }

  
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

  goToMaps(){
    this.router.navigate(['/maps']);
  }


}
