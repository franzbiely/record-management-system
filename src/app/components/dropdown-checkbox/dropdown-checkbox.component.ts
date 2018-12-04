import { Component, OnInit, forwardRef, Output, EventEmitter, } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';
import { MAT_CHECKBOX_CLICK_ACTION } from '@angular/material';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-dropdown-checkbox',
  templateUrl: './dropdown-checkbox.component.html',
  styleUrls: ['./dropdown-checkbox.component.scss'],
  providers: [{
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DropdownCheckboxComponent),
      multi: true,
    },
    { provide: MAT_CHECKBOX_CLICK_ACTION, useValue: 'noop' }
  ]
})
@NgModule({
  imports: [ FormsModule ]
  })
export class DropdownCheckboxComponent implements OnInit {
  isChecked = false;
  isIndeterminate = false;
  constructor() { }
  @Output() changeEvent = new EventEmitter<string>();

  ngOnInit() {
  }
  changeType(type) {
    console.log(type);
    this.changeEvent.emit(type);
    switch (type) {
      case 'all' : {
        this.isChecked = true;
        this.isIndeterminate = false;
        
        break;
      }
      case 'none' : {
        this.isChecked = false;
        this.isIndeterminate = false;
        break;
      }
      case 'default' : {
        this.isIndeterminate = true;
        break;
      }
    }
  }

}
