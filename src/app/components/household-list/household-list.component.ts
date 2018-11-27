import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-household-list',
  templateUrl: './household-list.component.html',
  styleUrls: ['./household-list.component.scss']
})
export class HouseholdListComponent implements OnInit {
	active_tab = 1; // 2, 3
	showForm = true;
	@Output() closeMeEvent = new EventEmitter<boolean>();
  openMemberForm : boolean = false;
	closeMe() {
    this.closeMeEvent.emit(true)
  }
  memberForm($event) {
    this.openMemberForm = $event;
  }
  constructor() { }

  ngOnInit() {
  }

}
