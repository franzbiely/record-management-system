import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ModalStatusService } from "../../services/modal-status.service"
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-household-list',
  templateUrl: './household-list.component.html',
  styleUrls: ['./household-list.component.scss']
})
export class HouseholdListComponent implements OnInit {
  selected_index= -1;
	active_tab = 1; // 2, 3
	showForm = true;
  openHousehold: boolean = false;
	@Output() closeMeEvent = new EventEmitter<boolean>();
  openMemberForm : boolean = false;
  frmOrion : FormGroup;
  frmRedtail : FormGroup;

  private household_list: Array<Object> = [
    {
      'name': 'Rhoades Household',
      'id': '9305',
      'fname': 'wendy',
      'lname': 'Rhoades'
    },
    {
      'name': 'Rhoades Household',
      'id': '9305',
      'fname': 'wendy',
      'lname': 'Rhoades'
    },
    {
      'name': 'Rhoades Household',
      'id': '9305',
      'fname': 'wendy',
      'lname': 'Rhoades'
    },
    {
      'name': 'Rhoades Household',
      'id': '9305',
      'fname': 'wendy',
      'lname': 'Rhoades'
    },
    {
      'name': 'Rhoades Household',
      'id': '9305',
      'fname': 'wendy',
      'lname': 'Rhoades'
    },
    {
      'name': 'Rhoades Household',
      'id': '9305',
      'fname': 'wendy',
      'lname': 'Rhoades'
    },
    {
      'name': 'Rhoades Household',
      'id': '9305',
      'fname': 'wendy',
      'lname': 'Rhoades'
    },
    {
      'name': 'Rhoades Household',
      'id': '9305',
      'fname': 'wendy',
      'lname': 'Rhoades'
    },
    {
      'name': 'Rhoades Household',
      'id': '9305',
      'fname': 'wendy',
      'lname': 'Rhoades'
    },
    {
      'name': 'Rhoades Household',
      'id': '9305',
      'fname': 'wendy',
      'lname': 'Rhoades'
    },
    {
      'name': 'Rhoades Household',
      'id': '9305',
      'fname': 'wendy',
      'lname': 'Rhoades'
    },
    {
      'name': 'Rhoades Household',
      'id': '9305',
      'fname': 'wendy',
      'lname': 'Rhoades'
    },
    {
      'name': 'Rhoades Household',
      'id': '9305',
      'fname': 'wendy',
      'lname': 'Rhoades'
    },
    {
      'name': 'Rhoades Household',
      'id': '9305',
      'fname': 'wendy',
      'lname': 'Rhoades'
    },
    {
      'name': 'Rhoades Household',
      'id': '9305',
      'fname': 'wendy',
      'lname': 'Rhoades'
    },
    {
      'name': 'Rhoades Household',
      'id': '9305',
      'fname': 'wendy',
      'lname': 'Rhoades'
    }
];

	closeMe() {
    this.closeMeEvent.emit(true);
    this.modalStatus.SET_household(false);
  }
  memberForm($event) {
    this.openMemberForm = $event;
  }
  constructor(private modalStatus: ModalStatusService, private fb: FormBuilder) { }
  checkboxSelected(i){
    this.selected_index = i;
  }
  ngOnInit() {
    this.modalStatus.household.subscribe(value => this.openHousehold = value);
    this.frmOrion = this.fb.group({
        email: ['', [Validators.required]],
        password : ['', [Validators.required]]
    })
    this.frmRedtail = this.fb.group({
        email: ['', [Validators.required]],
        password : ['', [Validators.required]]
    })
  }

}
