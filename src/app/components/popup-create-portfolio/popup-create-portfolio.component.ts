import { Component, OnInit, Input } from '@angular/core';
import { ModalStatusService } from "../../services/modal-status.service"
import { DataService } from "../../services/data.service"

@Component({
	selector: 'app-popup-create-portfolio',
	templateUrl: './popup-create-portfolio.component.html',
	styleUrls: ['./popup-create-portfolio.component.scss']
})
export class PopupCreatePortfolioComponent implements OnInit {
	btnNext: boolean = false;
	viewPortfolioModal: boolean = false;
	portfolioPopType : string|'view'|'edit' = 'view';
	
	constructor(private modalStatus: ModalStatusService, private data: DataService) { }

	ngOnInit() {
		this.modalStatus.viewPortfolio.subscribe(value => this.viewPortfolioModal = value);
		this.data.portfolioPopupType.subscribe(value => this.portfolioPopType = value);
	}
	closeMe() {
		this.modalStatus.SET_viewPortfolio(false);
	}
	editEventReciever($this) {
		this.data.SET_portfolioPopupType('edit');
	}
	saveEvent() {
		this.modalStatus.SET_viewPortfolio(false);
		this.data.SET_proposal_show_btnNext(true);
	}
	toggleModify() {
		if (this.portfolioPopType==='view') {
			this.data.SET_portfolioPopupType( 'edit' );	
		}
		else {
			this.data.SET_portfolioPopupType( 'view' );		
		}
	}
}
