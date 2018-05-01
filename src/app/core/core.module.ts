import { NgModule } from '@angular/core'
import { ShoppingCartService } from 'app/restaurant-details/shopping-cart/shopping-cart.service';
import { RestaurantsService } from 'app/restaurantes/restaurants.service';
import { OrderService } from 'app/order/order-service.service';

@NgModule({
    providers: [ShoppingCartService, RestaurantsService, OrderService]
})
export class CoreModule { }