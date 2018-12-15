import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown-filter',
  templateUrl: './dropdown-filter.component.html',
  styleUrls: ['./dropdown-filter.component.scss']
})
export class DropdownFilterComponent implements OnInit {
	checkCounter: number = 0;
	checkAll : boolean = false;
  constructor() { }

  ngOnInit() {
  }

  checkFilter(event, isForAll) {
  	if(event.checked) {
  		if(isForAll) {
  			this.checkAll = true;
  			this.checkCounter = 4;
  		}
  		else {
  			this.checkCounter++;	
  		}
  	}
  	else {
  		if(isForAll) {
  			this.checkAll = false;
  			this.checkCounter = 0;
  		}
  		else {
  			this.checkCounter--;	
  		}
  	}
  }

}
