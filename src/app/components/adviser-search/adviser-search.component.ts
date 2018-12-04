import { Component, OnInit, Renderer } from '@angular/core';
import { ModalStatusService } from "../../services/modal-status.service"

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-adviser-search',
  templateUrl: './adviser-search.component.html',
  styleUrls: ['./adviser-search.component.scss']
})
export class AdviserSearchComponent implements OnInit {
  enabled: boolean = false;
  adviserSearchPopupModal: boolean = false;
  constructor(private renderer: Renderer, private modalStatus: ModalStatusService) { }

  ngOnInit() {
    this.modalStatus.adviserSearchPopup.subscribe(value => this.adviserSearchPopupModal = value);
  }
  checkedRadio(event:any) {
    $('.table-container tr').removeClass('checked');
    $(event.target).closest('tr').addClass('checked');
    this.enabled = true;
  }
  btnCreate() {
    this.modalStatus.SET_adviserSearchPopup(true);
  }
}
