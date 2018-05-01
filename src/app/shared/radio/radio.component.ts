import { Component, OnInit, Input, forwardRef } from '@angular/core';
import {NG_VALUE_ACCESSOR, ControlValueAccessor} from '@angular/forms'
import { RadioOption } from 'app/shared/radio/radio-option.model';

@Component({
  selector: 'mt-radio',
  templateUrl: './radio.component.html', 
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => RadioComponent),
    multi: true
  }]
})

export class RadioComponent implements OnInit, ControlValueAccessor {
 

  @Input() options: RadioOption[];
  value: any;
  constructor() { }

  onChange: any;
  ngOnInit() {
  }

   /**
     * Write a new value to the element.
     */
    writeValue(obj: any){
      this.value = obj;
    }
    /**
     * Set the function to be called when the control receives a change event.
     */
    registerOnChange(fn: any){
      this.onChange = fn;
    }
    /**
     * Set the function to be called when the control receives a touch event.
     */
    registerOnTouched(fn: any){
      
    }


  setValue(value: any) {
    this.value = value;
    this.onChange(this.value);
  }

}
