import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalStatusService } from "../../services/modal-status.service"

@Component({
  selector: 'app-proposal',
  templateUrl: './proposal.component.html',
  styleUrls: ['./proposal.component.scss']
})
export class ProposalComponent implements OnInit {
	currentPage : number = 0;
	importAccountsModal: boolean = false;
	accountDetailsModal: boolean = false;

	toHousehold() {
		this.router.navigateByUrl('create-household');
	}
	nextReceiver() {
	    this.currentPage++;
	  }
  constructor(private router: Router, private modalStatus: ModalStatusService) { }


  ngOnInit() {
  	this.modalStatus.importAccount.subscribe(value => this.importAccountsModal = value);
  	this.modalStatus.accountDetails.subscribe(value => this.accountDetailsModal = value);
  }

}
