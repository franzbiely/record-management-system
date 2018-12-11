import { Component, OnInit } from '@angular/core';
import { ModalStatusService } from "../../services/modal-status.service"
import { DataService } from "../../services/data.service"

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
	viewPortfolioModal : boolean = false;
  portfolioPopType : string|'view'|'edit' = 'view';
  dropdown_active : boolean = false;
  constructor(private modalStatus: ModalStatusService, private data: DataService) { }

  ngOnInit() {
  	this.modalStatus.viewPortfolio.subscribe(value => this.viewPortfolioModal = value);
    this.data.portfolioPopupType.subscribe(value => this.portfolioPopType = value);
  }
  viewEventReciever() {
    this.data.SET_portfolioPopupType('view');
  	this.modalStatus.SET_viewPortfolio(true);
    window.scroll(0,0);
  }
  modifyEventReciever() {
    this.data.SET_portfolioPopupType('edit');
    this.modalStatus.SET_viewPortfolio(true);
    window.scroll(0,0);
  }
  set_dropdown_active(val) {
    this.dropdown_active = val;
  }
}
