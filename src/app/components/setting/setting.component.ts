import { Component, OnInit } from '@angular/core';
import { ModalStatusService } from "../../services/modal-status.service"

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {
  settingsLandingDefaultModal: boolean = false;
  constructor(private modalStatus: ModalStatusService) { }

  ngOnInit() {
  	this.modalStatus.settingsLandingDefault.subscribe(value => this.settingsLandingDefaultModal = value);
  }

  openSettingsLandingDefaultModal() {
  	this.modalStatus.SET_settingsLandingDefault(true);
  }

}
