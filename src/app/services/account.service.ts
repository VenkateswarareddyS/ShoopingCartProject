
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Product } from "app/models/product.model";
import "rxjs/add/operator/map";
import { Observable } from "rxjs/Observable";
import { CachcingServiceBase } from "./caching.service";
import { User } from "../models/user";

@Injectable()
export class AccountService {



  private accountUrl="http://localhost:9090/account/login"
  public constructor(private http: HttpClient) {
    
  }


//   createUser(user: User): Observable<User> {
//     return this.http.post<User>(this.accountUrl, user);
// } 


public createUser(user) {
    return this.http.post<User>(this.accountUrl, user);
  }




}
