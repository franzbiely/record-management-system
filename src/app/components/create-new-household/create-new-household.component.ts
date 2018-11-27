import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-create-new-household',
  templateUrl: './create-new-household.component.html',
  styleUrls: ['./create-new-household.component.scss']
})
export class CreateNewHouseholdComponent implements OnInit {
  @Output() closeNewProposalFormEvent = new EventEmitter<boolean>();

	openHouseHoldModal: boolean = false;
  openProposalForm: boolean = false;

	householdModal($event) {
		this.openHouseHoldModal = $event;
	}
  cancelReceiver() {
    this.openProposalForm = false;
    this.closeNewProposalFormEvent.emit(true)
  }
  nextReceiver() {
    alert('next')
    this.openProposalForm = false;
    this.closeNewProposalFormEvent.emit(true)
  }
  constructor() { }

  ngOnInit() {
  }
}
