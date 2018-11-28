import { Component, OnInit } from '@angular/core';
import { ModalStatusService } from "../../services/modal-status.service"

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss']
})
export class AccountDetailsComponent implements OnInit {
	accountDetailsModal: boolean = false;

  constructor(private modalStatus: ModalStatusService) { }

  ngOnInit() {
  	this.modalStatus.accountDetails.subscribe(value => this.accountDetailsModal = value);
  }

  closeMe() {
  	this.modalStatus.toggleAccountDetails(false);
  }

}
