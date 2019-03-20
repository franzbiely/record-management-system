import { Component, OnInit, Input } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-dropdown-filter-listview',
  templateUrl: './dropdown-filter-listview.component.html',
  styleUrls: ['./dropdown-filter-listview.component.scss']
})
export class DropdownFilterListviewComponent implements OnInit {
	checkCounter: number = 0;
	checkAll : boolean = false;
	@Input() showArchieved:boolean = false;
	filter_data = {
  	household : {
  		0 : false, //all
  		1 : false,
  		2 : false,
  	},
  	proposal : {
  		0 : true, //all
  		1 : true,
  		2 : true,
  		3 : true,
  		4 : true,
  	}
  }

  constructor() { 
	   	$(document).on('click', 'details', function () {
        	$('details').not(this).removeAttr('open');
		  });
		$(document).on('click', '.icon-dropdown', function () {
			var $parents = $( ".caption" ).parents( "div" );
    		$parents[0].addClass( "has-img-caption" ); // select the first div add add the class.
			$('details').parentsUntil('.dropdown-actions').addClass( "has-img-caption" );;
		});
  }

  ngOnInit() {
	  $(document).on('click', 'summary', function () {
		  $(this).closest('details').removeAttr('open');
	  });
	  $(document).bind('click', function (e) {
		  var $clicked = $(e.target);
		  let $hasDetails = $(".dropdown-actions").find(".dropdown-filter-listview");
		  if (!$clicked.parents().hasClass("dropdown-filter-listview")) { $hasDetails.prop('open', false) }
		  //console.log($clicked)
	  });
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
