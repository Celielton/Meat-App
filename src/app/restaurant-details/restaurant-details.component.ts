import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from 'app/restaurantes/restaurants.service';
import { Restaurant } from 'app/restaurantes/restaurant/restaurant.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-restaurant-details',
  templateUrl: './restaurant-details.component.html'
})
export class RestaurantDetailsComponent implements OnInit {
  restaurant: Restaurant;
  constructor
  (
    private restaurantsService: RestaurantsService,
    private route: ActivatedRoute
  ) {

  }

  ngOnInit() {
    this.restaurantsService.restaurantById(this.route.snapshot.params['id'])
    .subscribe(response => this.restaurant = response);
  }

}
