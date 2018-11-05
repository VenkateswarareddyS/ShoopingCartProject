import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";


import { StoreFrontComponent } from "./components/store-front/store-front.component";
import { SignInComponent } from "./components/sign-in/sign-in.component";


@NgModule({
    exports: [RouterModule],
    imports: [
        RouterModule.forRoot([
            {

                component: StoreFrontComponent,
                path: "home"
            },

            {
                component:SignInComponent,
                path: "login"
            },
            {
                component: StoreFrontComponent,
                path: "**"
            }
          


        ])
    ]
})
export class AppRoutingModule { }
