import { Component, OnInit } from '@angular/core';
import { ModalStatusService } from "../../services/modal-status.service"

@Component({
  selector: 'app-new-proposal-screen',
  templateUrl: './new-proposal-screen.component.html',
  styleUrls: ['./new-proposal-screen.component.scss']
})
export class NewProposalScreenComponent implements OnInit {

	importAccountsModal: boolean = false;
	accountDetailsModal: boolean = false;
  riskSendFormModal: boolean = false;
  constructor(private modalStatus: ModalStatusService) { }

  ngOnInit() {
  	this.modalStatus.importAccount.subscribe(value => this.importAccountsModal = value);
  	this.modalStatus.accountDetails.subscribe(value => this.accountDetailsModal = value);
    this.modalStatus.riskSendForm.subscribe(value => this.riskSendFormModal = value);
  }

}
