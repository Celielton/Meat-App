import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID, ErrorHandler } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, PreloadAllModules } from '@angular/router';
// import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppComponent } from './app.component';
import { HeaderComponent } from 'app/header/header.component';
import { HomeComponent } from 'app/home/home.component';
// import { AboutComponent } from 'app/about/about.component';
import { ROUTES } from 'app/app.routes';
import { RestaurantesComponent } from 'app/restaurantes/restaurantes.component';
import { RestaurantComponent } from 'app/restaurantes/restaurant/restaurant.component';
// import { RestaurantsService } from 'app/restaurantes/restaurants.service';
import { RestaurantDetailsComponent } from 'app/restaurant-details/restaurant-details.component';
import { MenuComponent } from 'app/restaurant-details/menu/menu.component';
import { ShoppingCartComponent } from 'app/restaurant-details/shopping-cart/shopping-cart.component';
import { MenuItemComponent } from 'app/restaurant-details/menu-item/menu-item.component';
import { ReviewsComponent } from 'app/restaurant-details/reviews/reviews.component';
// import { ShoppingCartService } from 'app/restaurant-details/shopping-cart/shopping-cart.service';
// import { OrderComponent } from 'app/order/order.component';
// import { InputComponent } from 'app/shared/input/input.component';
// import { RadioComponent } from 'app/shared/radio/radio.component';
// import { OrderItemsComponent } from 'app/order/order-items/order-items.component';
// import { OrderService } from 'app/order/order-service.service';
// import { DeliveryCostsComponent } from 'app/order/delivery-costs/delivery-costs.component';
import { OrderSumaryComponent } from 'app/order-sumary/order-sumary.component';
import { SharedModule } from 'app/shared/shared.module';
import { CoreModule } from 'app/core/core.module';
import { SnackbarComponent } from 'app/messages/snackbar/snackbar.component';
import { NotFoundComponent } from 'app/not-found/not-found.component';
import { LocationStrategy, HashLocationStrategy, registerLocaleData } from '@angular/common';
import { LoginComponent } from './security/login/login.component';
import { UserDetailComponent } from 'app/header/user-detail/user-detail.component';
import { ApplicationErrorHandler } from './app.error-handler';
import localePT from '@angular/common/locales/pt';
registerLocaleData(localePT, 'pt')

// import { RatingComponent } from 'app/shared/rating/rating.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    // AboutComponent,
    RestaurantesComponent,
    RestaurantComponent,
    RestaurantDetailsComponent,
    MenuComponent,
    ShoppingCartComponent,
    MenuItemComponent,
    ReviewsComponent,
    // OrderComponent,
    // InputComponent,
    // RadioComponent,
    // OrderItemsComponent,
    // DeliveryCostsComponent,
    OrderSumaryComponent,
    SnackbarComponent,
    NotFoundComponent,
    LoginComponent,
    UserDetailComponent,
    // RatingComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    // CoreModule,
    RouterModule.forRoot(ROUTES, { preloadingStrategy: PreloadAllModules }),
    // FormsModule,
    // ReactiveFormsModule,
    // SharedModule
    SharedModule.forRoute()

  ],
  exports: [SnackbarComponent],
  // providers: [RouterOutletMap, RestaurantsService, OrderService,ShoppingCartService, {provide: LOCALE_ID, useValue: 'pt-BR'}],
  providers: [{ provide: LOCALE_ID, useValue: 'pt' },
  // , { provide: LocationStrategy, useClass: HashLocationStrategy }
  { provide: ErrorHandler, useClass: ApplicationErrorHandler }
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
