import { Component, OnInit } from '@angular/core';
import { ModalStatusService } from "../../services/modal-status.service"
import { DataService } from "../../services/data.service"

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  btnNext : boolean = false;
	importAccountsModal: boolean = false;
	
  constructor(private modalStatus: ModalStatusService, private data: DataService) { }

  ngOnInit() {
  	this.modalStatus.importAccount.subscribe(value => this.importAccountsModal = value);
    this.data.proposal_show_btnNext.subscribe(value => this.btnNext = value);
  }

  showBtnNext() {
    this.data.SET_proposal_show_btnNext(true);
  }
  showImportAccountModal() {
    this.modalStatus.toggleImportAccount(true);
    this.data.SET_proposal_show_btnNext(false);
  }

}
