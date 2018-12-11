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
  data: object = {
    name : 'First & Last Name',
    email : '',
    phone : '',
    address: '',
    firm_name: '',
    login_code: '',
    avatar: '../../../assets/default-avatar.jpg'
  }

  adviserSearchPopupModal: boolean = false;
  constructor(private renderer: Renderer, private modalStatus: ModalStatusService) { }

  ngOnInit() {
    this.modalStatus.adviserSearchPopup.subscribe(value => this.adviserSearchPopupModal = value);
  }
  checkedRadio(event:any) {
    $('.table-container tr').removeClass('checked');
    $(event.target).closest('tr').addClass('checked');
    this.enabled = true;

    this.data = {
      name : 'Kim Mackrill',
      email : 'kimmackrill@bamfinancial.com',
      phone : '(402) 506-5644',
      address: '12012 Roberts Road, Suite C La Vista, NE USA 68128',
      firm_name: 'BAM Financial Advisors',
      login_code: '705_KM16',
      avatar: '../../../assets/sample-image.jpg'
    }
  }
  btnCreate() {
    this.modalStatus.SET_adviserSearchPopup(true);
  }
}
