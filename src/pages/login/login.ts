import { Component } from '@angular/core';
import { UserProvider } from '../../providers/user/user';
import { NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { RegisterPage } from '../register/register';
//import { HomePage } from '../home/home';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user: any = {};
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public _user: UserProvider) {
              }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  loginSubmit(){
    console.log(this._user, "submit login");
    this._user.login(this.user)
    .subscribe(
      (userRes: any ) =>{ 
        console.log("userRes", userRes);
      //  this.navCtrl.push(HomePage);
        this.navCtrl.setRoot(TabsPage);
        sessionStorage.setItem('token', userRes.token);
        sessionStorage.setItem('userId', userRes.userId);
      
      }
    )}
    regNav() {
      this.navCtrl.push(RegisterPage)
    }
}
