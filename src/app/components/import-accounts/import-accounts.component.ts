import { Component, OnInit } from '@angular/core';
import { ModalStatusService } from "../../services/modal-status.service"
const nisPackage = require('../../../../package.json');

@Component({
  selector: 'app-import-accounts',
  templateUrl: './import-accounts.component.html',
  styleUrls: ['./import-accounts.component.scss']
})
export class ImportAccountsComponent implements OnInit {
  selected_value = 0;
  array = [];
  sum = 100;
  throttle = 300;
  scrollDistance = 1;
  scrollUpDistance = 2;
  direction = '';
  selected_index = 0;

  nisVersion = nisPackage.dependencies['ngx-infinite-scroll'];

  selected_counter: number = 0;
  active_tab : number;
	importAccountsModal: boolean = false;
  accountDetailsModal: boolean = false;
  icon = [
    'myclient',
    'orion',
    'redtail',
    'wealth'
  ]
  constructor(private modalStatus: ModalStatusService) { 
    this.appendItems(0, this.sum);
   }

  ngOnInit() {
  	this.modalStatus.importAccount.subscribe(value => this.importAccountsModal = value);
    this.modalStatus.accountDetails.subscribe(value => this.accountDetailsModal = value);
  }

  addItems(startIndex, endIndex, _method) {
    for (let i = 0; i < this.sum; ++i) {
      this.array[_method]({
        'account_name': 'Rhoades IRA',
        'added': this.randomIcon(),
        'group': 'ENV Account',
        'custodian': 'Schwab',
        'account': '22345',
        'account_type': 'IRA',
        'owner': 'Phillip Rhoades',
        'value': '$200,000.00'
      });
    }
  }

  appendItems(startIndex, endIndex) {
    this.addItems(startIndex, endIndex, 'push');
  }

  randomIcon(){
    let index = Math.floor(Math.random() * Math.floor(3));
    return this.icon[index];
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
  showAccountDetailsModal() {
    this.modalStatus.toggleAccountDetails(true);
    this.modalStatus.toggleImportAccount(false);
  }

  closeMe() {
  	this.modalStatus.toggleImportAccount(false);
  }
  selectAccount(event) {
    this.selected_counter = (event.checked) ? this.selected_counter+1 : this.selected_counter-1;
    console.log(this.selected_counter);
  } 

}
