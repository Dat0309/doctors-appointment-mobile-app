import { Component, ElementRef, OnInit, ViewChild,OnChanges,Input } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation'; 

declare var google; 

@Component({
  selector: 'map-component',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})

export class MapComponent implements OnInit, OnChanges {
  @ViewChild('map', { static: true }) mapElement: ElementRef;
  map: any;
  showMap(latitude: any, longitude: any){
    let latLng = new google.maps.LatLng(latitude, longitude);
    let mapOptions = {
      center: latLng,
      zoom: 10,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
  }

 

  constructor() {
    this.getCurrentLocation().then((position: any) => {
      this.showMap(position.coords.latitude, position.coords.longitude);
    }); 
   }
   @Input() longitudeEvent: string;
   @Input() latitudeEvent: string;

   getCurrentLocation(): Promise<any> {
    return new Promise((resolve, reject) => {
        const locOptions = { maximumAge: 3000, timeout: 5000, enableHighAccuracy: true };
        Geolocation.getCurrentPosition(locOptions).then((position: any) => {
          resolve(position);
        }).catch(e => {
          reject(e.message);
        });
    });
  }
  ngOnInit() {
    this.showLocation(this.latitudeEvent,this.longitudeEvent)
  }


  ngOnChanges(){
    console.log(this.longitudeEvent);
    console.log(this.latitudeEvent);
    this.showLocation(this.latitudeEvent,this.longitudeEvent)
  }

  showLocation(latitude,longitude) {
    const latLng = new google.maps.LatLng(latitude, longitude);
    const mapOptions = {
      center: latLng,
      zoom: 20,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    };
    const marker = new google.maps.Marker(
      {
        position: latLng,
        animation: google.maps.Animation.BOUNCE,
      });
    // const infowindow = new google.maps.InfoWindow({
    //   content: `<p>${coffeeShop.name}</p><p>${coffeeShop.location}</p>`
    // });
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    marker.setMap(this.map);
    // infowindow.open(this.map, marker);
  }
}
