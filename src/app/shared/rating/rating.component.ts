import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mt-rating',
  templateUrl: './rating.component.html'
})
export class RatingComponent implements OnInit {

  @Output() rated = new EventEmitter<Number>()

  rates?: number[] = [1, 2, 3, 4, 5];
  rate: number = 0;
  previousRate: number;

  constructor() { }

  ngOnInit() {
  }

  setRate(rate) {
    this.rate = rate;
    this.previousRate = undefined;
    this.rated.emit(this.rate);
  }

  setPreviousRate(rate) {
    this.previousRate =  this.rate;
    this.rate = rate;
  }
  clearPreviousRate() {

    if(this.previousRate !== undefined){
      this.rate = this.previousRate;
    }
  
    this.previousRate = undefined;
  }
}
