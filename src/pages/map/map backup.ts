// import { Component, ViewChild, ElementRef } from '@angular/core';
// import { NavController } from 'ionic-angular';
// import { Geolocation } from '@ionic-native/geolocation';

// declare var google;


// @Component({
//   selector: 'map-page',
//   templateUrl: 'map.html',
// })
// export class MapPage {
 
//     @ViewChild('map') mapElement: ElementRef;
//     map: any;
//     infowindow: any;
//     options = {
//       enableHighAccuracy: true,
//       timeout: 5000,
//       maximumAge: 0
//     };
    
//     constructor(public navCtrl: NavController, 
//                 public geolocation: Geolocation) {
//     }
   
//     ionViewDidLoad(){
//       this.loadMap();
//     }
   
//     loadMap(){
//       console.log("loadMap ran on start")
//       this.geolocation.getCurrentPosition().then((position) => {
   
//         let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
   
//         let mapOptions = {
//           center: latLng,
//           zoom: 15,
//           mapTypeId: google.maps.MapTypeId.ROADMAP
//         }
//         let requestRestaurant = {
//           location: latLng,
//           radius: '500',
//           type: ['restaurant']
//         }
//         this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
   
        
//       }, (err) => {
//         console.log(err);
//       });
   
//       function createMarker(place) {
//         let that = this;
//         var placeLoc = place.geometry.location;
//         var marker = new google.maps.Marker({
//           map: this.map,
//           position: placeLoc
//         });
      
//       google.maps.event.addListener(marker, 'click', () => {
//       // infowindow.setContent(place.name);
//       // infowindow.open(map, this);
//       this.infowindow.setContent('<div><strong>' + place.name + '</strong><br>' +
//         'Place ID: ' + place.place_id + '<br>' +
//         place.vicinity + '</div>');
//       this.infowindow.open(this.map, marker);
//     });
//     function callback(results, status) {
//       if (status == google.maps.places.PlacesServiceStatus.OK) {
//         for (var i = 0; i < results.length; i++) {
//           var place = results[i];
//           this.createMarker(results[i]);
//         }
//       }
//     }
//         };
        
//       }
//   }