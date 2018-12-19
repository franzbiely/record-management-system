import { Component, OnInit, Output, EventEmitter, } from '@angular/core';
import { ModalStatusService } from "../../services/modal-status.service";

@Component({
  selector: 'app-popup-custom-asset-class',
  templateUrl: './popup-custom-asset-class.component.html',
  styleUrls: ['./popup-custom-asset-class.component.scss']
})
export class PopupCustomAssetClassComponent implements OnInit {

  viewPortfolioModal : boolean = false;
  assetClassModal : boolean = false;

  setModalStatus($value) {
    this.modalStatus.SET_viewPortfolio(false);
    this.modalStatus.SET_assetClass($value);
    this.modalStatus.toggleAccountDetails(false);
  }
  constructor(private modalStatus: ModalStatusService) { }  

  ngOnInit() {
    this.modalStatus.viewPortfolio.subscribe(value => this.viewPortfolioModal = value);
    this.modalStatus.assetClass.subscribe(value => this.assetClassModal = value);
  }

  @Output() selectEvent = new EventEmitter<boolean>();
  selectFunc() {
    this.selectEvent.emit(true);
    this.modalStatus.SET_assetClass(false);
  }

}
