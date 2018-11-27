import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-new-household',
  templateUrl: './create-new-household.component.html',
  styleUrls: ['./create-new-household.component.scss']
})
export class CreateNewHouseholdComponent implements OnInit {
	openHouseHoldModal: boolean = false;
	householdModal($event) {
		this.openHouseHoldModal = $event;
	}

  constructor() { }

  ngOnInit() {
  }
}
