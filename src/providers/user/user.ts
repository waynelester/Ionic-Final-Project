import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UserProvider {
    //baseUrl: string = "http://wayne-spring-2018-phortonssf.c9users.io:8080/api";
    //appUsers: string = "/appUsers/";
    url_register: string = "http://localhost:3000/api/users?";
    url_login: string = "http://localhost:3000/api/users/login?";
    url_logout: string = "http://localhost:3000/api/users/logout?";
    //addfavorites url concat
    url_favorite: string = "http://localhost:3000/api/favorites?access_token="
    //apiKey: string = user.apiKey

  constructor(public _http: HttpClient) {
  }
  login(user){
    console.log(user, "logged in")
    return this._http.post(this.url_login, user);
}
register(user){
    console.log(user, "registered")
    return this._http.post(this.url_register, user);
}
// addFavorites(place) {
//     console.log(place, "favorite added")
//     return this._http.post(this.url_favorite + user.token, place)
// }
// books(){
//     let token = sessionStorage.getItem("token")
//     console.log("token", token)
//     this._http.get(this.booksUrl + token )
//     .subscribe(
//       res => console.log("res", res)
}
