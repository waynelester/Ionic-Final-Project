import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HomePage } from '../home/home';
import { FavoritesPage } from '../favorites/favorites';
import { MapPage } from '../map/map';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  mapRoot: any = MapPage;
  homeRoot: any = HomePage;
  favoritesRoot: any = FavoritesPage;


  constructor(public navCtrl: NavController) {}

}
