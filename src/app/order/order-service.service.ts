import { Injectable } from '@angular/core';
import { ShoppingCartService } from 'app/restaurant-details/shopping-cart/shopping-cart.service';
import { CartItem } from 'app/restaurant-details/shopping-cart/cart-item.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MEAT_API } from 'app/app.api';
import { Order } from 'app/order/order.model';
// import { LoginService } from '../security/login/login.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class OrderService {

  constructor(private httpClient: HttpClient,
    private cartService: ShoppingCartService,
    // private loginService: LoginService
  ) { }

  cartItems(): CartItem[] {
    return this.cartService.itens;
  }

  increaseQty(item: CartItem) {
    this.cartService.increaseQty(item);
  }

  decreaseQty(item: CartItem) {
    this.cartService.decreaseQty(item);
  }

  remove(item: CartItem) {
    this.cartService.remover(item);
  }

  itemsValue(): number {
    return this.cartService.total();
  }

  checkOrder(order): Observable<string> {
    // let header = new HttpHeaders();
    // if (this.loginService.isLoggedIn()) {
    //   header = header.set('Authorization', `Bearer ${this.loginService.user.accessToken}`)
    // }
    // return this.httpClient.post<Order>(`${MEAT_API}/orders`, order, { headers: header })
    //   .map(order => order.id);
    return this.httpClient.post<Order>(`${MEAT_API}/orders`, order)
    .pipe(map(order => order.id));
  }

  clear() {
    this.cartService.clear();
  }

}
