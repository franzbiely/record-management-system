import { Component, OnInit } from '@angular/core';
import { ModalStatusService } from "../../services/modal-status.service"

@Component({
  selector: 'app-popup-email-language',
  templateUrl: './popup-email-language.component.html',
  styleUrls: ['./popup-email-language.component.scss']
})
export class PopupEmailLanguageComponent implements OnInit {

  constructor(private modalStatus: ModalStatusService) { }

  ngOnInit() {
  }

  closeMe() {
  	this.modalStatus.SET_emailLang(false);
  }
}
