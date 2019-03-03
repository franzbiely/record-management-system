import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { ModalStatusService } from "../../services/modal-status.service"

@Component({
  selector: 'app-popup-landing-page',
  templateUrl: './popup-landing-page.component.html',
  styleUrls: ['./popup-landing-page.component.scss']
})
export class PopupLandingPageComponent implements OnInit {
  isChecked=0;
  active_tab=0;
  @Input() currentPage = '';
	@Output() defaultPage = new EventEmitter<string>();

  constructor(private modalStatus: ModalStatusService) { }

  ngOnInit() {
    if ( this.currentPage == 'HOME VIEW'){
      this.isChecked = 1;
      this.active_tab = 1;
    } else {
      this.isChecked = 2;
      this.active_tab = 2;
    }
  }

  changeDefault(value){
    if (value == 1){
      this.isChecked = value;
    } else {
      this.isChecked = value;
    }
  }
  onSaveSetting(){
    if (this.isChecked == 1){
      this.defaultPage.emit('HOME VIEW');
    } else {
      this.defaultPage.emit('LIST VIEW');
    }
    this.modalStatus.SET_popupLandingDefault(false);
  }

  closeMe() {
  	this.modalStatus.SET_popupLandingDefault(false);
  }

}
