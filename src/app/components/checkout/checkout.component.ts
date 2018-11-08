import { Component, OnInit } from '@angular/core';
import { ProductsDataService } from '../../services/products.service';
import { Product } from 'app/models/product.model';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  products:Product[];

  constructor(private productService :ProductsDataService) { }

  ngOnInit() {
    this.products=this.productService.getProductsArray();
    for(let product of this.products)
    {
      console.log("name :" +product.name);
    }

  }

}
