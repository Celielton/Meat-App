import { Routes } from "@angular/router";
import { HomeComponent } from "app/home/home.component";
// import { AboutComponent } from "app/about/about.component";
import { RestaurantesComponent } from "app/restaurantes/restaurantes.component";
import { RestaurantComponent } from "app/restaurantes/restaurant/restaurant.component";
import { RestaurantDetailsComponent } from "app/restaurant-details/restaurant-details.component";
import { MenuComponent } from "app/restaurant-details/menu/menu.component";
import { ReviewsComponent } from "app/restaurant-details/reviews/reviews.component";
// import { OrderComponent } from "app/order/order.component";
import { OrderSumaryComponent } from "app/order-sumary/order-sumary.component";
import { NotFoundComponent } from "app/not-found/not-found.component";
import { LoginComponent } from "./security/login/login.component";
import { LoggedInGuard } from "./security/loggedIn.guard";

export const ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login/:to', component: LoginComponent },
    { path: 'login', component: LoginComponent },
    // { path: 'about', component: AboutComponent },
    { path: 'about', loadChildren: './about/about.module#AboutModule' },
    {
        path: 'restaurants/:id', component: RestaurantDetailsComponent, children: [
            { path: '', redirectTo: 'menu', pathMatch: 'full' },
            { path: 'menu', component: MenuComponent },
            { path: 'reviews', component: ReviewsComponent }
        ]
    },
    { path: 'restaurants', component: RestaurantesComponent },
    // { path: 'order', component: OrderComponent },
    {
        path: 'order', loadChildren: './order/order.module#OrderModule',
        canLoad: [LoggedInGuard], canActivate: [LoggedInGuard]
    },

    { path: 'order-sumary', component: OrderSumaryComponent },
    { path: '**', component: NotFoundComponent },

];