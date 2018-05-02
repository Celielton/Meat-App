import { Component, OnInit } from '@angular/core';
import { Restaurant } from 'app/restaurantes/restaurant/restaurant.model';
import { RestaurantsService } from 'app/restaurantes/restaurants.service';
import { trigger, state, style, transition, animate } from '@angular/animations'
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable, from } from 'rxjs'
import { switchMap, tap, debounceTime, distinctUntilChanged, catchError } from 'rxjs/operators'

@Component({
  selector: 'mt-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css'],
  animations: [
    trigger('toggleSearch', [
      state('hidden', style({
        opacity: 0,
        'max-height': '0px'
      })),
      state('visible', style({
        opacity: 1,
        'max-height': '70px',
        'margin-top': '20px'
      })),
      transition('* => *', animate('250ms 0s ease-in-out'))
    ])
  ]
})
export class RestaurantesComponent implements OnInit {
  restaurants: Restaurant[];
  searchBarState: string = 'hidden';

  searchForm: FormGroup;
  searchControl: FormControl;

  constructor(private restaurantService: RestaurantsService,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.searchControl = this.fb.control('')

    this.searchForm = this.fb.group({
      searchControl: this.searchControl
    })

    this.restaurantService.restaurants()
      .subscribe(restaurants => this.restaurants = restaurants);


    this.searchControl.valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        switchMap(searchTerm => this.restaurantService.restaurants(searchTerm)
          .pipe(
            catchError(error => from([]))
          )
        )).subscribe(restaurants => {
          this.restaurants = restaurants;
        })

  }

  toggleSearch() {
    this.searchBarState = this.searchBarState === 'hidden' ? 'visible' : 'hidden';
  }

}
