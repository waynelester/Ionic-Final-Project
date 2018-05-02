import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';
import { HomePage } from '../home/home';
import { TabsPage } from '../tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
user: any = {}; 
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public _user: UserProvider) {
  }
  registerSubmit(){
    console.log(this._user, "registered");
    this._user.register(this.user)
    .subscribe( ( userRes: any ) => { 
      console.log(userRes, "res") 
      //this.navCtrl.push(HomePage);
      this.navCtrl.setRoot(TabsPage);
     sessionStorage.setItem('token', userRes.token);
     sessionStorage.setItem('userId', userRes.userId);
       }
    )
    }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

}
