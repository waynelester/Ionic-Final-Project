import { Component } from '@angular/core';
import { UserProvider } from '../../providers/user/user';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

@IonicPage()
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
        console.log(userRes, "reg");
        this.navCtrl.push(HomePage);
        sessionStorage.setItem('token', userRes.token);
        sessionStorage.setItem('userId', userRes.userId);
      
      }
    )}
}
