import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from 'app/restaurantes/restaurants.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { DatePipe } from '@angular/common';
import { style, trigger, transition, animate, state } from '@angular/animations'

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html',
  animations: [
    trigger('review', [ style({opacity: 1}),
    transition('void => ready', [ style({ opacity: 0, transform: 'translate(-400px)' }), animate('500ms 0s ease-in')])])
  ]
})
export class ReviewsComponent implements OnInit {

  reviewState = 'ready'

  reviews : Observable<any>;
  constructor(private restaurantService: RestaurantsService,
  private route: ActivatedRoute) { }

  ngOnInit() {
    this.reviews = this.restaurantService.reviews(this.route.parent.snapshot.params['id']);
  }

}
