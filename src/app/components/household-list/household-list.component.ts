import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ModalStatusService } from "../../services/modal-status.service"
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OrderPipe } from 'ngx-order-pipe';

declare var jquery:any;
declare var $ :any;

const nisPackage = require('../../../../package.json');

@Component({
  selector: 'app-household-list',
  templateUrl: './household-list.component.html',
  styleUrls: ['./household-list.component.scss']
})
export class HouseholdListComponent implements OnInit {
  array = [];
  sum = 20;
  throttle = 30;
  scrollDistance = 1;
  scrollUpDistance = 2;
  direction = '';
  modalOpen = false;

  icon: string = 'down';
  order: string = 'name';
  reverse: boolean = false;
  sortedCollection: any[];

  nisVersion = nisPackage.dependencies['ngx-infinite-scroll'];

  

  selected_index= 0;
	active_tab = 1; // 2, 3
	showForm = true;
  openHousehold: boolean = false;
	@Output() closeMeEvent = new EventEmitter<boolean>();
  openMemberForm : boolean = false;
  frmOrion : FormGroup;
  frmRedtail : FormGroup;

	closeMe() {
    this.closeMeEvent.emit(true);
    this.modalStatus.SET_household(false);
  }

  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }
    console.log(value)
    this.order = value;
  }

  memberForm($event) {
    this.openMemberForm = $event;
  }
  constructor(private modalStatus: ModalStatusService, private fb: FormBuilder, private orderPipe: OrderPipe) {
    this.appendItems(0, this.sum);
    this.sortedCollection = orderPipe.transform(this.array, 'name');
    console.log(this.sortedCollection);
   }
   
  checkboxSelected(i){
    this.selected_index = i+1;
  }
  ngOnInit() {
    this.modalStatus.household.subscribe(value => this.openHousehold = value);
    this.frmOrion = this.fb.group({
        email: ['', [Validators.required]],
        password : ['', [Validators.required]]
    })
    this.frmRedtail = this.fb.group({
        email: ['', [Validators.required]],
        password : ['', [Validators.required]]
    })
  }
  addItems(startIndex, endIndex, _method) {
    for (let i = 0; i < this.sum; ++i) {
      this.array[_method]({
        'name': 'Rhoades Household'+i,
        'id': '9305'+i,
        'fname': 'wendy'+i,
        'lname': 'Rhoades'+i
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
}
