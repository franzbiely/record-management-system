import { Component, OnInit } from '@angular/core';
import { ModalStatusService } from "../../services/modal-status.service"
import { DataService } from "../../services/data.service"
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  selected_counter: number = 0;
  selectedAccounts:any;
  btnNext : boolean = false;
	importAccountsModal: boolean = false;
	
  constructor(private modalStatus: ModalStatusService, private data: DataService) { }

  ngOnInit() {
  	this.modalStatus.importAccount.subscribe(value => this.importAccountsModal = value);
    this.data.proposal_show_btnNext.subscribe(value => this.btnNext = value);
  }
  showImportAccountModal() {
    this.modalStatus.toggleImportAccount(true);
    this.data.SET_proposal_show_btnNext(false);
  }
  selectAccount(event) {
    if(event.checked) {
      this.selected_counter++;
    } else {
      this.selected_counter--;
      console.log()
    }
    if(this.selected_counter > 0) {
      this.data.SET_proposal_show_btnNext(true);
    }
    else {
      this.data.SET_proposal_show_btnNext(false);
    }
  }
}
