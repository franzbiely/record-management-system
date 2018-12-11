import { Component, OnInit } from '@angular/core';
import { ModalStatusService } from "../../services/modal-status.service"

@Component({
  selector: 'app-popup-document-language',
  templateUrl: './popup-document-language.component.html',
  styleUrls: ['./popup-document-language.component.scss']
})
export class PopupDocumentLanguageComponent implements OnInit {

  constructor(private modalStatus: ModalStatusService) { }

  ngOnInit() {
  }

  closeMe() {
  	this.modalStatus.SET_docuLang(false);
  }

}
