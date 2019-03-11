import { Component, OnInit } from '@angular/core';
import { ModalStatusService } from "../../services/modal-status.service";
import { DataService } from "../../services/data.service";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

const nisPackage = require('../../../../package.json');

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
  haveAllocationData: boolean = false;

  frmAI = {
    f1 : '',
    f2 : 'Manually',
    f4 : 'Fidelity',
    f6 : 'IRA (Roth)',
    f7 : 'Chris Candelaria'
  }
  array = [];
  sum = 100;
  throttle = 300;
  scrollDistance = 1;
  scrollUpDistance = 2;
  direction = '';
  
  nisVersion = nisPackage.dependencies['ngx-infinite-scroll'];

  constructor(private modalStatus: ModalStatusService, private data: DataService, private fb: FormBuilder) {
    this.appendItems(0, this.sum);
   }

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

  addItems(startIndex, endIndex, _method) {
    for (let i = 0; i < this.sum; ++i) {
      this.array[_method]({
        'name': 'International Business Machines Cor',
        'id': 'IBM',
        'asset': 'Cash & Cash Alternatives',
        'quantity': '155.75',
        'allocation': '11%',
        'value': '$20,000.00'
      });
    }
  }
  appendItems(startIndex, endIndex) {
    this.addItems(startIndex, endIndex, 'push');
  }
  
  prependItems(startIndex, endIndex) {
    this.addItems(startIndex, endIndex, 'unshift');
  }

  onScrollDown (ev) {
    console.log('scrolled down!!', ev);

    // add another 20 items
    const start = this.sum;
    this.sum += 20;
    this.appendItems(start, this.sum);
    
    this.direction = 'down'
  }
  
  onUp(ev) {
    console.log('scrolled up!', ev);
    const start = this.sum;
    this.sum += 20;
    this.prependItems(start, this.sum);
  
    this.direction = 'up';
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
    this.haveAllocationData = true;
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
