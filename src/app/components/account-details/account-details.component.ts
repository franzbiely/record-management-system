import { Component, OnInit } from '@angular/core';
import { ModalStatusService } from "../../services/modal-status.service"
import { DataService } from "../../services/data.service"

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss']
})
export class AccountDetailsComponent implements OnInit {
  type: string = '';
  quickAdd: boolean = false;
  importAccountsModal: boolean = false;
	accountDetailsModal: boolean = false;

  constructor(private modalStatus: ModalStatusService, private data: DataService) { }

  ngOnInit() {
    this.modalStatus.importAccount.subscribe(value => this.importAccountsModal = value);
  	this.modalStatus.accountDetails.subscribe(value => this.accountDetailsModal = value);
  }

  closeMe() {
  	this.modalStatus.toggleAccountDetails(false);
  }
  saveMe() {
    this.modalStatus.toggleImportAccount(false);
    this.modalStatus.toggleAccountDetails(false);
  }

  setQuickAddType(type) {
    this.data.SET_accountDetailsType(type);
  }
}
