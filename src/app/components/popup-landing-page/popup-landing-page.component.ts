import { Component, OnInit } from '@angular/core';
import { ModalStatusService } from "../../services/modal-status.service"

@Component({
  selector: 'app-popup-landing-page',
  templateUrl: './popup-landing-page.component.html',
  styleUrls: ['./popup-landing-page.component.scss']
})
export class PopupLandingPageComponent implements OnInit {
  isChecked=1;
  active_tab=1;

  constructor(private modalStatus: ModalStatusService) { }

  ngOnInit() {
  }

  closeMe() {
  	this.modalStatus.SET_popupLandingDefault(false);
  }

}
