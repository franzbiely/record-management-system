import { Component, OnInit } from '@angular/core';
import { ModalStatusService } from "../../services/modal-status.service"
import { DataService } from "../../services/data.service"

@Component({
  selector: 'app-settings-landing-default',
  templateUrl: './settings-landing-default.component.html',
  styleUrls: ['./settings-landing-default.component.scss']
})
export class SettingsLandingDefaultComponent implements OnInit {

	landing_default : string = 'home-view';

  constructor(private modalStatus: ModalStatusService, private data: DataService) { }

  ngOnInit() {
  }

  closeMe() {
  	this.modalStatus.SET_settingsLandingDefault(false);
  }

  save() {
  	this.data.SET_settingsLandingDefault(this.landing_default);
  }

}
