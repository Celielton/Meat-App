import { Restaurant } from 'app/restaurantes/restaurant/restaurant.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MEAT_API } from 'app/app.api';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators'
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';
// import { ErrorHandler } from 'app/app.error-handler';
import { MenuItem } from 'app/restaurant-details/menu-item/menu-item.model';


@Injectable()
export class RestaurantsService {
    // rests: Restaurant[] = [
    //     {
    //       id : 'bread-bakery',
    //       name: 'Bread & Bakery',
    //       category: 'Bakery',
    //       deliveryEstimate: '25m',
    //       rating: 4.9,
    //       imagePath: 'assets/img/restaurants/breadbakery.png'
    //     },
    //     {
    //       id: 'burger-house',
    //       name: 'Burger House',
    //       category: 'Hamburgers',
    //       deliveryEstimate: '100m',
    //       rating: 3.5,
    //       imagePath: 'assets/img/restaurants/burgerhouse.png'
    //     },
    //   ];
    constructor(private httpClient: HttpClient) { }

    restaurants(search?: string): Observable<Restaurant[]> {
        let param: HttpParams = undefined;
        if (search) {
            param = new HttpParams().append('q', search)
        }
        return this.httpClient.get<Restaurant[]>(`${MEAT_API}/restaurants`, { params: param })
    }

    restaurantById(id): Observable<Restaurant> {
        return this.httpClient.get<Restaurant>(`${MEAT_API}/restaurants/${id}`)
    }

    reviews(id: string): Observable<any> {
        return this.httpClient.get<any>(`${MEAT_API}/restaurants/${id}/reviews`)
    }

    menuOfRestaurant(id: string): Observable<MenuItem> {
        return this.httpClient.get<MenuItem>(`${MEAT_API}/restaurants/${id}/menu`)
    }
}