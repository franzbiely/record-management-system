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
  defaultPage = 'HOME VIEW';
  defaultPageTemplate = 'home-page';
  defaultRAQ = 'Loring Ward Default';
  defaultDocument = 'Loring Ward Default';

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
  changeDefaultPage($event) {
    if ($event == 'HOME VIEW'){
      this.defaultPage = 'HOME VIEW';
      this.defaultPageTemplate = 'home-page';
    } else {
      this.defaultPage = 'LIST VIEW';
      this.defaultPageTemplate = 'listview-page';
    }
  }
  changeDefaultRAQ($event) {
    this.defaultRAQ = $event;
  }
  changeDefaultDocument($event) {
    this.defaultDocument = $event;
  }
}
