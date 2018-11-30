import { Component, OnInit } from '@angular/core';
import { ModalStatusService } from "../../services/modal-status.service"

@Component({
  selector: 'app-asset-class',
  templateUrl: './asset-class.component.html',
  styleUrls: ['./asset-class.component.scss']
})
export class AssetClassComponent implements OnInit {
  viewPortfolioModal : boolean = false;
  assetClassModal : boolean = false;
  allocationDetailsModal : boolean = false;

  constructor(private modalStatus: ModalStatusService) { }  

  ngOnInit() {
    this.modalStatus.viewPortfolio.subscribe(value => this.viewPortfolioModal = value);
    this.modalStatus.assetClass.subscribe(value => this.assetClassModal = value);
    this.modalStatus.allocationDetails.subscribe(value => this.allocationDetailsModal = value);
  }

  cancelEvent() {
    this.modalStatus.SET_viewPortfolio(true);
    this.modalStatus.SET_assetClass(false);
  }

  viewDetailEvent() {
    this.modalStatus.SET_assetClass(false);
    this.modalStatus.SET_allocationDetails(true);
  }
}
