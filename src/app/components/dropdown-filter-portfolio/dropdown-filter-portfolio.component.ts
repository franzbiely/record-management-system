import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-dropdown-filter-portfolio',
  templateUrl: './dropdown-filter-portfolio.component.html',
  styleUrls: ['./dropdown-filter-portfolio.component.scss']
})
export class DropdownFilterPortfolioComponent implements OnInit {

  filter_data = {
  	riskname_and_range : {
  		0 : true, //all
  		1 : true,
  		2 : true,
  		3 : true,
  		4 : true,
  		5 : true,
  		6 : true,
  		7 : true,
  	},
  	portfolios : {
  		0 : true, //all
  		1 : true,
  		2 : true,
  		3 : true,
  	}
  }
  constructor() { }

  ngOnInit() {
	$(document).bind('click', function (e) {
		var $clicked = $(e.target);
		let $hasDetails = $(".dropdown-actions").find("details");
		if (!$clicked.parents().hasClass("dropdown-filter-portfolio")){ $hasDetails.prop('open', false);}
		console.log($clicked)
	  });
  }

  selectAllToggler(event, type) {
  	if(event.checked) {
  		Object.keys(this.filter_data[type]).forEach(v => this.filter_data[type][v] = true)	
  		console.log(this.filter_data)
  	}
  	else {
  		Object.keys(this.filter_data[type]).forEach(v => this.filter_data[type][v] = false)
  		console.log(this.filter_data)
  	}
  }

}
