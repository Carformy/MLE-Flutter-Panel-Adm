import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';
import { styles } from './mapstyle';

import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit , AfterViewInit {

  title = 'google-maps';

  private map: google.maps.Map;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    let loader = new Loader({
      apiKey: 'AIzaSyClQTxuq3g_HygXRb0exv4qZ_BlLchgDvc'
    })

    loader.load().then(() => {
      console.log('loaded gmaps')

      const location = { lat: 40.66917791234185, lng: -74.26929890966811 }

      this.map = new google.maps.Map(document.getElementById("map") as HTMLCanvasElement, {
        center: location,
        zoom: 6,
    
      })

      const marker = new google.maps.Marker({
        position: location,
        map: this.map,
      });
    })
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
  ngAfterViewInit(): void {
    
  }
}
