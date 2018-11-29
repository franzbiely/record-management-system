import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalStatusService } from "../../services/modal-status.service"
import { DataService } from "../../services/data.service"


@Component({
  selector: 'app-proposal',
  templateUrl: './proposal.component.html',
  styleUrls: ['./proposal.component.scss']
})
export class ProposalComponent implements OnInit {
	showNext : boolean = false;
	currentPage : number = 0;
	importAccountsModal: boolean = false;
	accountDetailsModal: boolean = false;

	toHousehold() {
		this.router.navigateByUrl('create-household');
	}
	nextReceiver() {
      this.data.SET_proposal_show_btnNext(false);
	    this.currentPage++;
	  }
  constructor(private router: Router, 
  				private modalStatus: ModalStatusService,
  				private data: DataService) { }


  ngOnInit() {
  	this.modalStatus.importAccount.subscribe(value => this.importAccountsModal = value);
  	this.modalStatus.accountDetails.subscribe(value => this.accountDetailsModal = value);
  	this.data.proposal_show_btnNext.subscribe(value => this.showNext = value);
  }

}
