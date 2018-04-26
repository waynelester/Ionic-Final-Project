import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {
    baseUrl: string = "http://wayne-spring-2018-phortonssf.c9users.io:8080/api";
    appUsers: string = "/appUsers/";  
    upsert: string = "/movies/upsertWithWhere?";
    deleteMovie: string = "/movies/";
    baseMovies: string = "/movies?access_token=";
    tokenString: string = "&access_token=";

  constructor(public _http: HttpClient) {
    console.log('Hello UserProvider Provider');
  }
  login(user){
    console.log(user, "logged in")
        return this._http.post(this.baseUrl + this.appUsers + "login", user);
}
register(user){
    console.log(user, "registered")
    return this._http.post(this.baseUrl + this.appUsers, user);
}
}
