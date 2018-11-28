import { Component, OnInit } from '@angular/core';
import { ModalStatusService } from "../../services/modal-status.service"

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
	importAccountsModal: boolean = false;
	showImportAccountModal() {
  	this.modalStatus.toggleImportAccount(true);
  }
  constructor(private modalStatus: ModalStatusService) { }

  ngOnInit() {
  	this.modalStatus.importAccount.subscribe(value => this.importAccountsModal = value);
  }



}
