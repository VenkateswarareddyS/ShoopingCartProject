import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Product } from "app/models/product.model";
import "rxjs/add/operator/map";
import { Observable } from "rxjs/Observable";
import { CachcingServiceBase } from "./caching.service";

let count = 0;
//const serverurl = '';// "http://localhost:9090/";
//const productListUrl = "/shopec/GET/products";
const serverurl = "http://localhost:9090";
const productListUrl = "/GET/products";

@Injectable()
export class ProductsDataService extends CachcingServiceBase {
  private products: Observable<Product[]>;
  totalCount: number;
  totalPrice: number;
  subscribe: any;
  productsArray:Product[];

  public constructor(private http: HttpClient) {
    super();
  }

  public all(): Observable<Product[]> {
    return this.cache<Product[]>(() => this.products,
      (val: Observable<Product[]>) => this.products = val,
      () => this.http
        .get<Product[]>(serverurl + productListUrl)
    );

  }

   
public setProductsArray(productsArray)
{
  this.productsArray=productsArray;
}

public getProductsArray() :any
{
  return this.productsArray;
}

  public setTotalItems(totalCount) {
    this.totalCount = totalCount;
  }

  public setTotalPrice(totalPrice) {
    this.totalPrice = totalPrice;
  }

  public getTotalPrice(): any {

    return this.getTotalPrice;
  }


  public getTotalItems(): any {

    return this.getTotalItems;
  }

}
