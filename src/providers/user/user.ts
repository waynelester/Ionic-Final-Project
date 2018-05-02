import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable()
export class UserProvider {
    //baseUrl: string = "http://wayne-spring-2018-phortonssf.c9users.io:8080/api";
    //appUsers: string = "/appUsers/";
    url_register: string = "http://wayne-spring-2018-phortonssf.c9users.io:8080/api/appUsers?";
    url_login: string = "http://wayne-spring-2018-phortonssf.c9users.io:8080/api/appUsers/login?";
    url_logout: string = "http://wayne-spring-2018-phortonssf.c9users.io:8080/api/appUsers/logout?";
    //addfavorites url concat
    url_favorite: string = "favorites?access_token="
    fave_url: "http://wayne-spring-2018-phortonssf.c9users.io:8080/api/appUsers/"
   // userId: "5ae7c008d7ac40433355d9cd/"
    faveToken: "favorites?access_token="
  //  userObject: "userRes.userId/";
   // http://localhost:3000/api/appUsers/5ae7c008d7ac40433355d9cd/favorites?access_token=9OdCPoc1Zj6sFV5j53pjiOp95ZcwyGnjsHiv3P3iTMmyr5nJiqnS2AGALBk4pwtF
    

  constructor(public _http: HttpClient) {
  }
  login(user){
    console.log(user.email, " logged in")
    return this._http.post(this.url_login, user);
}
register(user){
    console.log(user, "registered")
  
    return this._http.post(this.url_register, user);
}

// addfavorite(place){
//     let token = sessionStorage.getItem("token")
//     console.log("token", token)
//     this._http.get(this.url_favorite + token )
//     .subscribe(
//       response => {
//       this._http.post(this.fave_url + userId + this.faveToken + token, place);
//     }
//     );
// }
addFavorite(place){
    let token = sessionStorage.getItem("token")
    let userId = sessionStorage.getItem("userId")
    console.log(token, userId, place);
    //this._http.post(this.fave_url + userId + this.faveToken + token, place)
      //.subscribe(  userId => console.log( userId ))
}
}
