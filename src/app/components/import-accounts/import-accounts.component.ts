import { Component, OnInit } from '@angular/core';
import { ModalStatusService } from "../../services/modal-status.service"
import { OrderPipe } from 'ngx-order-pipe';

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

  order: string = 'account_name';
  reverse: boolean = false;
  sortedCollection: any[];

  nisVersion = nisPackage.dependencies['ngx-infinite-scroll'];

  selected_counter: number = 0;
  active_tab : number;
	importAccountsModal: boolean = false;
  accountDetailsModal: boolean = false;
  icon = ['myclient','orion','redtail','wealth']

  constructor(private modalStatus: ModalStatusService, private orderPipe: OrderPipe) { 
    this.appendItems(0, this.sum);
    this.sortedCollection = orderPipe.transform(this.array, 'account_name');
   }

  ngOnInit() {
  	this.modalStatus.importAccount.subscribe(value => this.importAccountsModal = value);
    this.modalStatus.accountDetails.subscribe(value => this.accountDetailsModal = value);
  }

  addItems(startIndex, endIndex, _method) {
    this.sum = endIndex ;
    for (let i = startIndex; i < this.sum; i++) {
      this.array[_method]({
        'account_name': 'Rhoades IRA'+' '+i,
        'added': this.randomIcon(),
        'group': 'ENV Account'+' '+i,
        'custodian': 'Schwab'+' '+i,
        'account': '22345',
        'account_type': 'IRA' +' '+i,
        'owner': 'Phillip Rhoades'+' '+i,
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

  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }
    console.log(value)
    this.order = value;
  }

  selectAccount(event) {
    this.selected_counter = (event.checked) ? this.selected_counter+1 : this.selected_counter-1;
    console.log(this.selected_counter);
  } 

}
