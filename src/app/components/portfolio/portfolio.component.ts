import { Component, OnInit } from '@angular/core';
import { ModalStatusService } from "../../services/modal-status.service"

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
	viewPortfolioModal : boolean = false;
  constructor(private modalStatus: ModalStatusService) { }

  ngOnInit() {
  	this.modalStatus.viewPortfolio.subscribe(value => this.viewPortfolioModal = value);
  }
  viewEventReciever() {
  	this.modalStatus.SET_AccountDetails(true);
  }
}
