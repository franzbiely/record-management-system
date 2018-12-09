import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ModalStatusService } from "../../services/modal-status.service"
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-household-list',
  templateUrl: './household-list.component.html',
  styleUrls: ['./household-list.component.scss']
})
export class HouseholdListComponent implements OnInit {
  selected_index= 0;
	active_tab = 1; // 2, 3
	showForm = true;
  openHousehold: boolean = false;
	@Output() closeMeEvent = new EventEmitter<boolean>();
  openMemberForm : boolean = false;
	closeMe() {
    this.closeMeEvent.emit(true);
    this.modalStatus.SET_household(false);
  }
  memberForm($event) {
    this.openMemberForm = $event;
  }
  constructor(private modalStatus: ModalStatusService) { }

  ngOnInit() {
    this.modalStatus.household.subscribe(value => this.openHousehold = value);
  }

}
