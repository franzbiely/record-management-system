import { Component, OnInit } from '@angular/core';
import { ModalStatusService } from "../../services/modal-status.service";
import { DataService } from "../../services/data.service";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss']
})
export class AccountDetailsComponent implements OnInit {
  frmAccountDetails : FormGroup;
  type: string = '';
  quickAdd: boolean = false;
  importAccountsModal: boolean = false;
	accountDetailsModal: boolean = false;
  enableAccountInfo : boolean = false;
  showSuggestion: boolean = false;
  frmAI = {
    f1 : '',
    f2 : 'Manually',
    f4 : 'Fidelity',
    f6 : 'IRA (Roth)',
    f7 : 'Chris Candelaria'
  }
  constructor(private modalStatus: ModalStatusService, private data: DataService, private fb: FormBuilder) { }

  ngOnInit() {
    this.modalStatus.importAccount.subscribe(value => this.importAccountsModal = value);
  	this.modalStatus.accountDetails.subscribe(value => this.accountDetailsModal = value);
    this.data.enableAccountInfo.subscribe(value => this.enableAccountInfo = value);

    this.frmAccountDetails = this.fb.group({
        f1: ['', [Validators.required]],
        f2: ['', [Validators.required]],
        f3: ['', [Validators.required]],
        f4: ['', [Validators.required]],
        f5: ['', [Validators.required]],
        f6: ['', [Validators.required]],
        f7: ['', [Validators.required]]
    })
  }

  closeMe() {
  	this.modalStatus.toggleAccountDetails(false);
  }
  saveMe() {
    this.modalStatus.toggleImportAccount(false);
    this.modalStatus.toggleAccountDetails(false);
  }

  setQuickAddType(type) {
    this.data.SET_accountDetailsType(type);
  }
  clickSuggestion() {
    this.showSuggestion = false;
  }
  onSearchChange(searchValue : string) {
    if(searchValue!=''){
      this.showSuggestion = true;
    }
    else {
      this.showSuggestion = false;
    }
  }
  selectPopupCAssets(event) {
    this.data.SET_enableAccountInfo(true);
  }
}
