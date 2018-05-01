import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartItem } from 'app/restaurant-details/shopping-cart/cart-item.model';

@Component({
  selector: 'mt-order-items',
  templateUrl: './order-items.component.html'
})
export class OrderItemsComponent implements OnInit {


  @Input() items: CartItem[]

  @Output() increaseQty = new EventEmitter<CartItem>()
  @Output() decreaseQty = new EventEmitter<CartItem>()
  @Output() remove = new EventEmitter<CartItem>()



  constructor() { }

  ngOnInit() {
  }


  emmitIncreaseQty(item: CartItem) {
    this.increaseQty.emit(item);
  }
  emmitDecreaseQty(item: CartItem) {
    this.decreaseQty.emit(item);
  }
  emmitRemove(item: CartItem) {
    this.remove.emit(item);
  }
}
