import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
 
declare var google;
 
@Component({
  selector: 'home-page',
  templateUrl: 'home.html'
})
export class HomePage {
 
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  infowindow: any;
  
  options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };
  
  constructor(public navCtrl: NavController, 
              public geolocation: Geolocation) {
  }
 
  ionViewDidLoad(){
     this.loadMap();
    //console.log(GeolocationMarker);
    
  }
 
  loadMap(){
    console.log("loadMap ran on start")
    this.geolocation.getCurrentPosition().then((position) => {
      
      //var GeoMarker = new GeolocationMarker(this.map);
      //console.log(GeoMarker);
      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
 
      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }
      let requestRestaurant = {
        location: latLng,
        radius: '500',
        type: ['restaurant']
      }
      
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
      this.addMarker();
      
      
    }, (err) => {
      console.log(err);
    });
    
    function createMarker(place) {
    let that = this;
      var placeLoc = place.geometry.location;
      var marker = new google.maps.Marker({
        map: this.map,
        position: placeLoc
      });
    
    google.maps.event.addListener(marker, 'click', () => {
    // infowindow.setContent(place.name);
    // infowindow.open(map, this);
    this.infowindow.setContent('<div><strong>' + place.name + '</strong><br>' +
      'Place ID: ' + place.place_id + '<br>' +
      place.vicinity + '</div>');
    this.infowindow.open(this.map, marker);
  });
  // function callback(results, status) {
  //   if (status == google.maps.places.PlacesServiceStatus.OK) {
  //     for (var i = 0; i < results.length; i++) {
  //       var place = results[i];
  //       this.createMarker(results[i]);
  //     }
  //   }
  // }
      };
      
    }
    addInfoWindow(marker, content){
 
      let infoWindow = new google.maps.InfoWindow({
        content: content
      });
     
      google.maps.event.addListener(marker, 'click', () => {
        infoWindow.open(this.map, marker);
      });
     
    }
    addMarker(){
 
      let marker = new google.maps.Marker({
        map: this.map,
        animation: google.maps.Animation.DROP,
        position: this.map.getCenter()
      });
     
      let content = "<h4>You are Here!</h4>";         
     
      this.addInfoWindow(marker, content);
     
    }

    // initMap() {
    //   navigator.geolocation.getCurrentPosition((location) => {
    //     console.log(location);
    //     map = new google.maps.Map(this.mapElement.nativeElement, {
    //       center: {lat: location.coords.latitude, lng: location.coords.longitude},
    //       zoom: 15
    //     });
    
    //     infowindow = new google.maps.InfoWindow();
    //     var service = new google.maps.places.PlacesService(map);
    //     service.nearbySearch({
    //       location: {lat: location.coords.latitude, lng: location.coords.longitude},
    //       radius: 1000,
    //       type: ['store']
    //     }, (results,status) => {
    //       if (status === google.maps.places.PlacesServiceStatus.OK) {
    //         for (var i = 0; i < results.length; i++) {
    //           this.createMarker(results[i]);
    //         }
    //       }
    //     });
    //   }, (error) => {
    //     console.log(error);
    //   }, options);
    //   var myplace = {lat: -33.8665, lng: 151.1956};
    // }
}