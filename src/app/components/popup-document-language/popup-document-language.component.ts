import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ModalStatusService } from "../../services/modal-status.service"

@Component({
  selector: 'app-popup-document-language',
  templateUrl: './popup-document-language.component.html',
  styleUrls: ['./popup-document-language.component.scss']
})
export class PopupDocumentLanguageComponent implements OnInit {
  isChecked = 0;
  @Input() currentDocument = '';

  constructor(private modalStatus: ModalStatusService) { }
  @Output() defaultDocument = new EventEmitter<string>();

  ngOnInit() {
    // alert(this.currentRAQ)
    if (this.currentDocument == 'Loring Ward Default') {
      this.isChecked = 1;
    } else {
      this.isChecked = 2;
    }
  }
  changeDefault(value){
    if (value == 1){
      this.isChecked = value;
    } else {
      this.isChecked = value;
    }
  }
  
  onSaveDefaultDocument(){
    if (this.isChecked == 1){
      this.defaultDocument.emit('Loring Ward Default');
    } else {
      this.defaultDocument.emit('Type your own');
    }
    this.modalStatus.SET_docuLang(false);
  }
  closeMe() {
  	this.modalStatus.SET_docuLang(false);
  }
}
