import { Component, OnInit } from '@angular/core';
import { ModalStatusService } from "../../services/modal-status.service"
import { DataService } from "../../services/data.service"

@Component({
  selector: 'app-portfolio-admin',
  templateUrl: './portfolio-admin.component.html',
  styleUrls: ['./portfolio-admin.component.scss']
})
export class PortfolioAdminComponent implements OnInit {
  viewPortfolioModal: boolean = false;
  portfolioPopType : string|'view'|'edit' = 'view';

  constructor(private modalStatus: ModalStatusService, private data: DataService) { }

  ngOnInit() {
    this.modalStatus.viewPortfolio.subscribe(value => this.viewPortfolioModal = value);
    this.data.portfolioPopupType.subscribe(value => this.portfolioPopType = value);

  }
  viewEventReciever(event) {
    this.data.SET_portfolioPopupType('view');
    this.modalStatus.SET_viewPortfolio(true);
    window.scroll(0,0);
  }
  modifyEventReciever(event) {
    this.data.SET_portfolioPopupType('edit');
    this.modalStatus.SET_viewPortfolio(true);
    window.scroll(0,0);
  }

}
