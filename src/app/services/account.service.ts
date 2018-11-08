import { HttpClient } from "@angular/common/http";
import { User } from "../models/user";
import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';



@Injectable()
export class AccountService {
any:User[];


  private accountUrl="http://localhost:9090/account/login"
  public constructor(private http: HttpClient) {
    
  }


//   createUser(user: User): Observable<User> {
//     return this.http.post<User>(this.accountUrl, user);
// } 


public createUser(user) {
    return this.http.post<User[]>(this.accountUrl, user);
  }


// createUser(user: User):Observable<number> {
//   let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
//  // let options = new RequestOptions({ headers: cpHeaders });
//   return this.http.post(this.accountUrl, user)
//     //  .map(success => success.status)
//      // .catch(this.handleError);
// } 


// private extractData(res: Response) {
// 	let body = res.json();
//         return body;
//     }
//     private handleError (error: Response | any) {
// 	console.error(error.message || error);
// 	return Observable.throw(error.status);
//     }

}
