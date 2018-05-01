import { MenuItem } from "app/restaurant-details/menu-item/menu-item.model";

export class CartItem {
    constructor(public menuItem: MenuItem, public quantity: number = 1){

    }

    value(): number {
        return this.menuItem.price * this.quantity;
    }
}