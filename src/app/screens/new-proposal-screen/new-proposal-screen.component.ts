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
  questionnaireModal: boolean = false;
  viewPortfolioModal : boolean = false;
  portfolioPopupType : 'view'|'edit' = 'view';
  assetClassModal : boolean = false;
  allocationDetailsModal : boolean = false;

  constructor(private modalStatus: ModalStatusService) { }

  ngOnInit() {
  	this.modalStatus.importAccount.subscribe(value => this.importAccountsModal = value);
  	this.modalStatus.accountDetails.subscribe(value => this.accountDetailsModal = value);
    this.modalStatus.riskSendForm.subscribe(value => this.riskSendFormModal = value);
    this.modalStatus.questionnaire.subscribe(value => this.questionnaireModal = value);
    this.modalStatus.viewPortfolio.subscribe(value => this.viewPortfolioModal = value);
    this.modalStatus.assetClass.subscribe(value => this.assetClassModal = value);
    this.modalStatus.allocationDetails.subscribe(value => this.allocationDetailsModal = value);
  }

}
