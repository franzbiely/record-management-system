import { Component, OnInit } from '@angular/core';
import { ModalStatusService } from "../../services/modal-status.service"

@Component({
  selector: 'app-import-accounts',
  templateUrl: './import-accounts.component.html',
  styleUrls: ['./import-accounts.component.scss']
})
export class ImportAccountsComponent implements OnInit {
	importAccountsModal: boolean = false;
  accountDetailsModal: boolean = false;
  constructor(private modalStatus: ModalStatusService) { }

  ngOnInit() {
  	this.modalStatus.importAccount.subscribe(value => this.importAccountsModal = value);
    this.modalStatus.accountDetails.subscribe(value => this.accountDetailsModal = value);
  }

  showAccountDetailsModal() {
    this.modalStatus.toggleAccountDetails(true);
  }

  closeMe() {
  	this.modalStatus.toggleImportAccount(false);
  }

}
