import { Component, OnInit } from '@angular/core';
import { ModalStatusService } from "../../services/modal-status.service"

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {
  popupLandingDefaultModal: boolean = false;
  emailLangModal : boolean = false;
  docuLangModal : boolean = false;

  constructor(private modalStatus: ModalStatusService) { }

  ngOnInit() {
  	this.modalStatus.popupLandingDefault.subscribe(value => this.popupLandingDefaultModal = value);
    this.modalStatus.emailLang.subscribe(value => this.emailLangModal = value);
    this.modalStatus.docuLang.subscribe(value => this.docuLangModal = value);
  }

  openSettingsLandingDefaultModal() {
  	this.modalStatus.SET_popupLandingDefault(true);
  }

  open_emailLang() {
    this.modalStatus.SET_emailLang(true);
  }
  open_docuLang() {
    this.modalStatus.SET_docuLang(true);
  }

}
