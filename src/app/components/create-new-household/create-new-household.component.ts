import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from "../../services/data.service"

@Component({
  selector: 'app-create-new-household',
  templateUrl: './create-new-household.component.html',
  styleUrls: ['./create-new-household.component.scss']
})
export class CreateNewHouseholdComponent implements OnInit {
  @Output() closeNewProposalFormEvent = new EventEmitter<boolean>();
	openHouseHoldModal: boolean = false;
  openProposalForm: boolean = false;
  hholdHaveData: boolean;

	householdModal($event) {
		this.openHouseHoldModal = $event;
	}
  cancelReceiver() {
    this.openProposalForm = false;
    this.closeNewProposalFormEvent.emit(true)
  }
  nextReceiver() {
    this.router.navigateByUrl('/proposal');
  }
  constructor(private router: Router, private data: DataService) { }

  ngOnInit() {
    this.data.householdHaveData.subscribe(value => this.hholdHaveData = value);
  }
}
