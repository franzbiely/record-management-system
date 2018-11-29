import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
	showSuggestion : boolean = false;

	onSearchChange(searchValue : string) {
		if(searchValue!=''){
			this.showSuggestion = true;
		}
		else {
			this.showSuggestion = false;
		}
	}
  constructor() { }

  ngOnInit() {
  }

}
