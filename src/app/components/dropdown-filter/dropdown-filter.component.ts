import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

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
		$(document).bind('click', function (e) {
      var $clicked = $(e.target);
      let $hasDetails = $(".dropdown-section").find("details");
      if (!$clicked.parents().hasClass("dropdown-section")){ $hasDetails.prop('open', false);}
      console.log($clicked)
    });
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
