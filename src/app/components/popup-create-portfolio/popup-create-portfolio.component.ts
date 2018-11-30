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
	editPortfolioModal: boolean = false;
	@Input() isEdit: boolean = false;
	
	constructor(private modalStatus: ModalStatusService, private data: DataService) { }

	ngOnInit() {
		this.modalStatus.viewPortfolio.subscribe(value => this.viewPortfolioModal = value);
		this.modalStatus.editPortfolio.subscribe(value => this.editPortfolioModal = value);
	}
	closeView() {
		this.modalStatus.SET_viewPortfolio(false);
	}
	closeEdit() {
		this.modalStatus.SET_editPortfolio(false);
	}
	editEventReciever($this) {
		this.isEdit = true;
	}
	saveEvent() {
		this.modalStatus.SET_viewPortfolio(false);
		this.data.SET_proposal_show_btnNext(true);
	}

}
