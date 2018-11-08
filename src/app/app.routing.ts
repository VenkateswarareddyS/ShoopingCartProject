import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";


import { StoreFrontComponent } from "./components/store-front/store-front.component";
import { SignInComponent } from "./components/sign-in/sign-in.component";
import { CheckoutComponent } from "./components/checkout/checkout.component";


@NgModule({
    exports: [RouterModule],
    imports: [
        RouterModule.forRoot([
            {

                component: StoreFrontComponent,
                path: "home"
            },

            {

                component: StoreFrontComponent,
                path: "products"
            },

            {
                component:SignInComponent,
                path: "login"
            },
            {
                component:CheckoutComponent,
                path: "checkout"
            },


            {
                component: StoreFrontComponent,
                path: "**"
            }
          


        ])
    ]
})
export class AppRoutingModule { }
