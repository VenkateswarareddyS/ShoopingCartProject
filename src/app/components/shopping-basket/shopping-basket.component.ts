import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping-basket',
  templateUrl: './shopping-basket.component.html',
  styleUrls: ['./shopping-basket.component.scss']
})
export class ShoppingBasketComponent implements OnInit {
@Input()
noOfItems:number;
@Input() grosstotal:number;
@Input() product:any;
  

  constructor(private router: Router,) { }

  ngOnInit() {
  }


  emptyBasket() :void
  {
      for(let prod of this.product)
      {
        prod.quantity=0;
        this.noOfItems=0;
        this.grosstotal=0;
      }
  }


  proceedToCheckout()
  {
    this.router.navigate(['/checkout'])
  }
}
