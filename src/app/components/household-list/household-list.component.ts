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
  selected_index= 0;
	active_tab = 1; // 2, 3
	showForm = true;
  openHousehold: boolean = false;
	@Output() closeMeEvent = new EventEmitter<boolean>();
  openMemberForm : boolean = false;
  frmOrion : FormGroup;
  frmRedtail : FormGroup;
	closeMe() {
    this.closeMeEvent.emit(true);
    this.modalStatus.SET_household(false);
  }
  memberForm($event) {
    this.openMemberForm = $event;
  }
  constructor(private modalStatus: ModalStatusService, private fb: FormBuilder) { }

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
