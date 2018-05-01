import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'app/restaurant-details/shopping-cart/shopping-cart.service';
import { trigger, transition, state, style, animate, keyframes } from '@angular/animations'

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  animations: [
    trigger('row', [
      state('ready', style({ opacity: 1 })),
      transition('void => ready', animate('300ms 0s ease-in', keyframes([
        style({ opacity: 0, transform: 'translateX(-30px)', offset: 0 }),
        style({ opacity: 0.8, transform: 'translateX(10px)', offset: 0.8 }),
        style({ opacity: 1, transform: 'translateX(0px)', offset: 1 }),
      ]))),
      transition('ready => void', animate('300ms 0s ease-out', keyframes([
        style({ opacity: 1, transform: 'translateX(0px)', offset: 0 }),
        style({ opacity: 0.8, transform: 'translateX(-10px)', offset: 0.2 }),
        style({ opacity: 0, transform: 'translateX(30px)', offset: 1 }),
      ])))
    ])
  ]
})
export class ShoppingCartComponent implements OnInit {

  constructor(private ShoppingCartService: ShoppingCartService) { }

  rowState = 'ready'
  ngOnInit() {
  }

  itens() {
    return this.ShoppingCartService.itens;
  }
  total() {
    return this.ShoppingCartService.total();
  }
  clear() {
    this.ShoppingCartService.clear();
  }
  remove(item) {
    this.ShoppingCartService.remover(item);
  }

  add(item) {
    this.ShoppingCartService.adicionar(item);
  }
}
