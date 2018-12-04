import { Component, OnInit } from '@angular/core';
import { ModalStatusService } from "../../services/modal-status.service";

@Component({
  selector: 'app-portfolio-admin',
  templateUrl: './portfolio-admin.component.html',
  styleUrls: ['./portfolio-admin.component.scss']
})
export class PortfolioAdminComponent implements OnInit {
  viewPortfolioModal: boolean = false;

  constructor(private modalStatus: ModalStatusService) { }

  ngOnInit() {
    this.modalStatus.viewPortfolio.subscribe(value => this.viewPortfolioModal = value);
  }
  showViewPortfolioModal() {
    this.modalStatus.SET_viewPortfolio(true);
  }

}
