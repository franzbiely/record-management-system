import { Component, OnInit } from '@angular/core';
import { ModalStatusService } from "../../services/modal-status.service";

@Component({
  selector: 'app-allocation-details',
  templateUrl: './allocation-details.component.html',
  styleUrls: ['./allocation-details.component.scss']
})
export class AllocationDetailsComponent implements OnInit {
  allocationDetailsModal : boolean = false;
  assetClassModal : boolean = false;

  constructor(private modalStatus: ModalStatusService) { }  

  ngOnInit() {
    this.modalStatus.allocationDetails.subscribe(value => this.allocationDetailsModal = value);
    this.modalStatus.assetClass.subscribe(value => this.assetClassModal = value);
  }

  closeEvent() {
    this.modalStatus.SET_allocationDetails(false);
    this.modalStatus.SET_assetClass(true);
  }
}
