import { Component, OnInit } from '@angular/core';
import { ModalStatusService } from "../../services/modal-status.service"

@Component({
  selector: 'app-import-accounts',
  templateUrl: './import-accounts.component.html',
  styleUrls: ['./import-accounts.component.scss']
})
export class ImportAccountsComponent implements OnInit {
	importAccountsModal: boolean = false;
  constructor(private modalStatus: ModalStatusService) { }

  ngOnInit() {
  	this.modalStatus.importAccount.subscribe(value => this.importAccountsModal = value);
  }

  closeMe() {
  	this.modalStatus.toggleImportAccount(false);
  }

}
