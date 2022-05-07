import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';

import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];


@Component({
  selector: 'app-order-info',
  templateUrl: './order-info.component.html',
  styleUrls: ['./order-info.component.css']
})
export class OrderInfoComponent implements OnInit , AfterViewInit {

  id: any;
  orderInfo: any;
  orders: any = [];
  orders2: any = [];

  orderInfo2: any = {};

  displayedColumns: string[] = ['weight', 'symbol','carBrand','carModel','carNumber','carType'];

  
  constructor(private route: ActivatedRoute,private authService: AuthService, private router: Router,db: AngularFireDatabase) {

    this.id = this.route.snapshot.paramMap.get('id');

    console.log(this.id);
 
    console.log(this.id);
  
    const driversRef = db.object('orders/' + this.id);
 
    driversRef.valueChanges().subscribe((snap) => {
       if (snap != null){
 
         this.orderInfo = snap;

         //this.orders.push(this.orderInfo);

         this.orderInfo2.originAddress = this.orderInfo.originAddress;
         this.orderInfo2.destinationAddress = this.orderInfo.destinationAddress;
         this.orderInfo2.carBrand = this.orderInfo.carBrand;
         this.orderInfo2.carModel = this.orderInfo.carModel;
         this.orderInfo2.carNumber = this.orderInfo.carNumber;
         this.orderInfo2.totalPayment = this.orderInfo.totalPayment;


         this.orders.push(this.orderInfo2);
         this.orders2.push(this.orders);
         //this.orders2 = Array.from(this.orders);
  

         console.log(this.orderInfo);
         console.log(this.orderInfo2);
         console.log(this.orders);
       }
        
     });
   }

  ngOnInit(): void {


  }

  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
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
