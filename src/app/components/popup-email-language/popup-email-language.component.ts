import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ModalStatusService } from "../../services/modal-status.service"
//import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-popup-email-language',
  templateUrl: './popup-email-language.component.html',
  styleUrls: ['./popup-email-language.component.scss']
})
export class PopupEmailLanguageComponent implements OnInit {
  active_tab = 0;
  isChecked = 0;
  @Input() currentRAQ = '';
  

  constructor(private modalStatus: ModalStatusService) { }
  @Output() defaultRAQ = new EventEmitter<string>();

  ngOnInit() {
    // alert(this.currentRAQ)
    if (this.currentRAQ == 'Loring Ward Default') {
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
  
  onSaveDefaultRAQ(){
    if (this.isChecked == 1){
      this.defaultRAQ.emit('Loring Ward Default');
    } else {
      this.defaultRAQ.emit('Type your own');
    }
    this.modalStatus.SET_emailLang(false);
  }
  closeMe() {
  	this.modalStatus.SET_emailLang(false);
  }
}
