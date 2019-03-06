import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ModalStatusService } from "../../services/modal-status.service"
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  sum = 100;
  throttle = 300;
  scrollDistance = 1;
  scrollUpDistance = 2;
  direction = '';
  modalOpen = false;

  nisVersion = nisPackage.dependencies['ngx-infinite-scroll'];

  

  selected_index= -1;
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
  memberForm($event) {
    this.openMemberForm = $event;
  }
  constructor(private modalStatus: ModalStatusService, private fb: FormBuilder) {
    this.appendItems(0, this.sum);
   }
   
  checkboxSelected(i){
    this.selected_index = i;
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
        'name': 'Rhoades Household',
        'id': '9305',
        'fname': 'wendy',
        'lname': 'Rhoades'
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
  generateWord() {
    return "hello world!";
  }

}
