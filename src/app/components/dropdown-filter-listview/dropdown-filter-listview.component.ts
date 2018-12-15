import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown-filter-listview',
  templateUrl: './dropdown-filter-listview.component.html',
  styleUrls: ['./dropdown-filter-listview.component.scss']
})
export class DropdownFilterListviewComponent implements OnInit {
	checkCounter: number = 0;
	checkAll : boolean = false;
  
	filter_data = {
  	household : {
  		0 : false, //all
  		1 : false,
  		2 : false,
  	},
  	proposal : {
  		0 : false, //all
  		1 : false,
  		2 : false,
  		3 : false,
  		4 : false,
  	}
  }

  constructor() { }

  ngOnInit() {
  }

  selectAllToggler(event, type) {
  	if(event.checked) {
  		Object.keys(this.filter_data[type]).forEach(v => this.filter_data[type][v] = true)	
  		console.log(this.filter_data)
  		this.checkAll = true;
  		this.checkCounter = 4;
  	}
  	else {
  		Object.keys(this.filter_data[type]).forEach(v => this.filter_data[type][v] = false)
  		console.log(this.filter_data)
  		this.checkAll = false;
  		this.checkCounter = 0;
  	}
  }

  checkFilter(event, isForAll) {
  	if(event.checked) {
  		this.checkCounter++;
  	}
  	else {
  		this.checkCounter--;
  	}
  }

}
