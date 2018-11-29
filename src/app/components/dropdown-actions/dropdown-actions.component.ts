import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dropdown-actions',
  templateUrl: './dropdown-actions.component.html',
  styleUrls: ['./dropdown-actions.component.scss']
})
export class DropdownActionsComponent implements OnInit {




	viewFunc() {
		this.viewEvent.emit(true);
	}
	@Output() viewEvent = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }

}
