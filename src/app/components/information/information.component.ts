import { Component, OnInit } from '@angular/core';
import { ModalStatusService } from "../../services/modal-status.service"

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit {
	firmModalStep: number = 1;
	firmInformationModal: boolean = false;
  constructor(private modalStatus: ModalStatusService) { }

  ngOnInit() {
  	this.modalStatus.firmInformation.subscribe(value => this.firmInformationModal = value);
  }

  openFirmModal(step) {
  	this.firmModalStep = step;
  	this.modalStatus.SET_firmInformation(true);
  }


}
