import { Injectable } from '@angular/core';
//3. import Observable, cookies, http....etc,,
import { Observable } from 'rxjs';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { HttpErrorResponse, HttpParams } from '@angular/common/http';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/do';
// import 'rxjs/add/operator/toPromise';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  //3.
  private url = "https://chatapi.edwisor.com";

  constructor(public http: HttpClient) { }
  //3.End Constructor

  public getUserInfoFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem('userInfo'));
  }//end getUserInfoFromLocalStorage

  public setUserInfoInLocalStorage = (data) => {
    localStorage.setItem('userInfo', JSON.stringify(data));
  }

  //3.Start signUp function
  public signupFunction(data): Observable<any> {
    const params = new HttpParams()
    .set('firstName', data.firstName)
    .set('lastName', data.lastName)
    .set('mobile', data.mobile)
    .set('email', data.email)
    .set('password', data.password)
    .set('apiKey', data.apiKey);

    return this.http.post("${this.url}/api/v1/users/signup", params);

  }//end signup function

  //3.Start signIn function
  public signInFunction(data): Observable<any> {
    const params = new HttpParams()
    .set('email', data.email)
    .set('password', data.password);

  return this.http.post("${this.url}/api/v1/users/login", params);

  }//end signIn function


}
